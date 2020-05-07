package models

type Expense struct {
	ID     int    `json:"id,omitempty"`
	Text   string `json:"text,omitempty"`
	Amount int    `json:"amount,omitempty"`
}
