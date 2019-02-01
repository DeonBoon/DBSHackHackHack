package com.dbs.tech.demo.customer.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    public Customer() {
    }

    public Customer(String fullname, int customerID, int accountID, double balance, boolean buttonTransact, boolean buttonInvest, boolean buttonPlanExpenses, int numClickButtonTransact, int numClickButtonInvest, int numClickButtonPlanExpenses) {
        this.customerID = customerID;
        this.accountID = accountID;
        this.fullname = fullname;
        this.balance = balance;
        this.buttonTransact = buttonTransact;
        this.buttonInvest = buttonInvest;
        this.buttonPlanExpenses = buttonPlanExpenses;
        this.numClickButtonTransact = numClickButtonTransact;
        this.numClickButtonInvest = numClickButtonInvest;
        this.numClickButtonPlanExpenses = numClickButtonPlanExpenses;
    }

    private int accountID;
    private int customerID;
    @Id
    private String fullname;
    private double balance;
    private boolean buttonTransact;
    private boolean buttonInvest;
    private boolean buttonPlanExpenses;
    private int numClickButtonTransact;
    private int numClickButtonInvest;
    private int numClickButtonPlanExpenses;

    public int getAccountID() {
        return accountID;
    }

    public int getNumClickButtonTransact() {
        return numClickButtonTransact;
    }

    public void increaseNumClickButtonTransact(int numClickButtonTransact) {
        this.numClickButtonTransact += numClickButtonTransact;
    }

    public int getNumClickButtonInvest() {
        return numClickButtonInvest;
    }

    public void increaseNumClickButtonInvest(int numClickButtonInvest) {
        this.numClickButtonInvest += numClickButtonInvest;
    }

    public int getNumClickButtonPlanExpenses() {
        return numClickButtonPlanExpenses;
    }

    public void increaseNumClickButtonPlanExpenses(int numClickButtonPlanExpenses) {
        this.numClickButtonPlanExpenses += numClickButtonPlanExpenses;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public boolean isButtonTransact() {
        return buttonTransact;
    }

    public void setButtonTransact(boolean buttonTransact) {
        this.buttonTransact = buttonTransact;
    }

    public boolean isButtonInvest() {
        return buttonInvest;
    }

    public void setButtonInvest(boolean buttonInvest) {
        this.buttonInvest = buttonInvest;
    }

    public boolean isButtonPlanExpenses() {
        return buttonPlanExpenses;
    }

    public void setButtonPlanExpenses(boolean buttonPlanExpenses) {
        this.buttonPlanExpenses = buttonPlanExpenses;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "accountID=" + accountID +
                ", customerID=" + customerID +
                ", fullname='" + fullname + '\'' +
                ", balance=" + balance +
                ", buttonTransact=" + buttonTransact +
                ", buttonInvest=" + buttonInvest +
                ", buttonPlanExpenses=" + buttonPlanExpenses +
                ", numClickButtonTransact=" + numClickButtonTransact +
                ", numClickButtonInvest=" + numClickButtonInvest +
                ", numClickButtonPlanExpenses=" + numClickButtonPlanExpenses +
                '}';
    }
}
