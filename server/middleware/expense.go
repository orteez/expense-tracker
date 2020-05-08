package middleware

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"../db"
	"../models"
	"github.com/gorilla/mux"
)

// Expenses get all expenses
func Expenses(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := db.Expenses()
	json.NewEncoder(w).Encode(payload)
}

// AddExpense add expense to db
func AddExpense(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var expense models.Expense
	_ = json.NewDecoder(r.Body).Decode(&expense)
	db.AddExpense(expense)
	json.NewEncoder(w).Encode(expense)
}

type testStruct struct {
	ID int `json:"id"`
}

// AddExpense add expense to db
func DeleteExpense(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	vars := mux.Vars(r)
	// we will need to extract the `id` of the article we
	// wish to delete
	str := vars["id"]
	id, err := strconv.Atoi(str)

	if err != nil {
		log.Fatalln(err)
		return
	}
	db.DeleteExpense(id)
	json.NewEncoder(w).Encode(id)
}

func EditExpense(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	var expense models.Expense
	_ = json.NewDecoder(r.Body).Decode(&expense)

	db.EditExpense(expense)
	json.NewEncoder(w).Encode(expense)
}
