package com.dbs.tech.demo.customer.controller;

import com.dbs.tech.demo.customer.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.tech.demo.customer.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@RestController
@RequestMapping("/g1")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value= "/customer_details", method = RequestMethod.POST, produces = "application/json")
    public Customer customer_details(String username){
        return customerService.getCustomer(username);
    }

    @RequestMapping(value = "/customer_recommendation", method = RequestMethod.POST, produces = "application/json")
    public ArrayList<Boolean> customer_recommendation(String username){
        return customerService.getCustomerRecommendation(username);
    }

    @RequestMapping(value = "/update_feature_clicks", method = RequestMethod.POST, produces = "application/json")
    public String update_feature_clicks(String username, String clicks){
        ArrayList<Integer> featureClicks = new ArrayList<>();
        String[] strArr = clicks.split(",");

        featureClicks.add(Integer.parseInt(strArr[0]));

        featureClicks.add(Integer.parseInt(strArr[1]));

        featureClicks.add(Integer.parseInt(strArr[2]));

        customerService.updateFeatureClicks(featureClicks,username);
        return "SUCCESS";
    }

    @RequestMapping(value = "/update_customisation", method = RequestMethod.POST, produces = "application/json")
    public String update_customisation(String username, String customisation){
        ArrayList<Boolean> Customisation = new ArrayList<>();
        String[] strArr = customisation.split(",");

        for (String string: strArr){
            if (string.equals("1")){
                Customisation.add(true);
            } else Customisation.add(false);
        }
        customerService.updateCustomisation(Customisation,username);

        return "SUCCESS";
    }

    @RequestMapping("/showall") //this is a GET request. which is the default. If you want Post or other methods you need to indicate.
    public List<Customer> getAllExpenditures(){
        Customer cus1=    new Customer("Name1",12344,123523, 123, false,false,false,0,0,0);
        Customer cus2=   new Customer("Name2",12556,164, 234, true,false,false,0,0,0);
        Customer cus3=   new Customer("Name3", 1234,12, 345.98, false,true,false,0,0,0);
        Customer cus4=    new Customer("Name4", 126000,1234, 456.30, false,false,true,3,2,1);

        customerService.addCustomer(cus1);
        System.out.println("Creating cus1");
        customerService.addCustomer(cus2);
        customerService.addCustomer(cus3);
        customerService.addCustomer(cus4);

        return customerService.getAllCustomer();
    }




}
