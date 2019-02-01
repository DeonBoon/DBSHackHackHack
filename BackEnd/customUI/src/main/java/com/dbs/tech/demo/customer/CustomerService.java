package com.dbs.tech.demo.customer;

import com.dbs.tech.demo.customer.CustomerRepository;
import com.dbs.tech.demo.customer.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {



    @Autowired
    private CustomerRepository customerRepository;

    public void addCustomer(Customer customer){
        customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer(){
        List<Customer> customerList = new ArrayList<>();
        customerRepository.findAll().forEach(customerList::add);
        return customerList;
    }

    public Customer getCustomer(String name){
        System.out.println("Customer obj: " + customerRepository.findOne(name));

        return customerRepository.findOne(name);
    }

    public ArrayList<Boolean> getCustomerRecommendation(String name){
        customerRepository.findOne(name);
        ArrayList<Boolean> booleanArr = new ArrayList<>();
        return booleanArr;
    }

    public void updateCustomer(Customer customer, String name){
        customerRepository.save(customer);
    }
    public void updateCustomisation(ArrayList<Boolean> booleanArr, String name){
        Customer customer = getCustomer(name);
        customer.setButtonInvest(booleanArr.get(0));
        customer.setButtonPlanExpenses(booleanArr.get(1));
        customer.setButtonTransact(booleanArr.get(2));
        customerRepository.save(customer);
    }

    public void deleteCustomer(String name){
        customerRepository.delete(name);
    }


    public boolean updateFeatureClicks(ArrayList<Integer> arrInt, String name){
        //if success return true
        Customer customer = getCustomer(name);
        customer.increaseNumClickButtonInvest(arrInt.get(0));
        customer.increaseNumClickButtonPlanExpenses(arrInt.get(1));
        customer.increaseNumClickButtonTransact(arrInt.get(2));

        customerRepository.save(customer);

        return true;
    }








}
