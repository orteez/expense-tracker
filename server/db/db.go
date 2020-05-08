package db

import (
	"context"
	"fmt"
	"log"
	"os"

	"../models"

	"github.com/jackc/pgx"
	"github.com/joho/godotenv"
)

func logFatal(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

var db *pgx.Conn

func init() {
	godotenv.Load()
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	db = conn
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
}

// Expenses get all expenses
func Expenses() []models.Expense {
	var expenses []models.Expense
	rows, err := db.Query(context.Background(), "select * from expenses")
	logFatal(err)

	for rows.Next() {
		var expense models.Expense

		// unmarshal the row object to user
		err := rows.Scan(&expense.ID, &expense.Text, &expense.Amount)

		if err != nil {
			log.Fatalf("Unable to scan the row. %v", err)
		}

		// append the user in the users slice
		expenses = append(expenses, expense)
	}

	return expenses
}

// AddExpense add expense into database
func AddExpense(expense models.Expense) {
	res, err := db.Exec(context.Background(), "INSERT INTO expenses (text, amount) VALUES($1, $2)", expense.Text, expense.Amount)
	log.Println(res)
	logFatal(err)
}

// AddExpense add expense into database
func DeleteExpense(id int) {
	res, err := db.Exec(context.Background(), "DELETE FROM expenses WHERE id = $1", id)
	logFatal(err)
	log.Println(res)
}

// AddExpense add expense into database
func EditExpense(expense models.Expense) {
	res, err := db.Exec(context.Background(), "UPDATE expenses SET amount=$1, text=$2 WHERE id=$3", expense.Amount, expense.Text, expense.ID)
	logFatal(err)
	log.Println(res)
}
