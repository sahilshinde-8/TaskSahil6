package com.aurionpro.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class Order {
	private int id;
	private Date date;
	private List<LineItem> items;
	public Order(int id, String date, List<LineItem> items) {
		super();
		this.id = id;
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd"); 
		try {
			this.date = formatter.parse(date);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.items = items;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public List<LineItem> getItems() {
		return items;
	}
	public void setItems(List<LineItem> items) {
		this.items = items;
	}
	public double calculateOrderPrice() {
		Double collect = items.stream().collect(Collectors.summingDouble(LineItem::calculateLineItemCost));
		
		//double total3;
		
		return collect;
		
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", date=" + date + ", items=" + items + "]";
	}

	
}
