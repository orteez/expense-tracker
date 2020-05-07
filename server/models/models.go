package models

type Expense struct {
	ID     int    `json:"id"`
	Text   string `json:"text"`
	Amount int    `json:"amount"`
}
