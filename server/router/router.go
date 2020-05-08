package router

import (
	"../middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/transaction", middleware.Expenses).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/transaction", middleware.AddExpense).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/transaction/{id}", middleware.DeleteExpense).Methods("DELETE", "OPTIONS")
	router.HandleFunc("/api/transaction/{id}/edit", middleware.EditExpense).Methods("PUT", "OPTIONS")

	return router
}
