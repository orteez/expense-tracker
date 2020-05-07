package db

import (
	"fmt"
	"log"
	"os"

	"../models"

	"github.com/eaigner/jet"
	"github.com/joho/godotenv"
	"github.com/lib/pq"
)

func logFatal(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

var db *jet.Db

func init() {
	godotenv.Load()
	//Make sure you setup the ELEPHANTSQL_URL to be a uri, e.g. 'postgres://user:pass@host/db?options's
	pgURL, err := pq.ParseURL(os.Getenv("ELEPHANTSQL_URL"))
	logFatal(err)
	db, err = jet.Open("postgres", pgURL)
	logFatal(err)
}

// Expenses get all expenses
func Expenses() []models.Expense {
	var expenses []models.Expense
	err := db.Query("SELECT * FROM expenses").Rows(&expenses)

	logFatal(err)

	return expenses
}

// AddExpense add expense into database
func AddExpense(expense models.Expense) {
	query := fmt.Sprintf("INSERT INTO expenses (text, amount) values ('%s', %d)", expense.Text, expense.Amount)
	res, err := db.Exec(query)
	log.Println(res)
	logFatal(err)
}
