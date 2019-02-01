package com.dbs.tech.demo.customer;

import com.dbs.tech.demo.customer.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer,String> {
}
