package com.aurionpro.model;

import java.util.List;
import java.util.stream.Collectors;

public class Customer {
	private int id;
	private String name;
	private List<Order> orders;
	public Customer(int id, String name, List<Order> orders) {
		super();
		this.id = id;
		this.name = name;
		this.orders = orders;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public double totalCost() {
		// TODO Auto-generated method stub
		Double collect = orders.stream().collect(Collectors.summingDouble(Order::calculateOrderPrice));
		return collect;
		
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", orders=" + orders + "]";
	}
	
	
	
}
