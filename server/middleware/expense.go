package middleware

import (
	"encoding/json"
	"net/http"

	"../db"
	"../models"
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
