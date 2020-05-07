package router

import (
	"../middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/expense", middleware.Expenses).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/expense", middleware.AddExpense).Methods("POST", "OPTIONS")

	return router
}
