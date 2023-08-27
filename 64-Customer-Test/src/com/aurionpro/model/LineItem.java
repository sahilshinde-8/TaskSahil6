package com.aurionpro.model;

public class LineItem {
	private int id;
	private int quantity;
	private Product product;
	public LineItem(int id, int quantity, Product product) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.product = product;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public double calculateLineItemCost() {
		double total2;
		total2 = quantity * product.calculateDiscountedPrice();
		return total2;
		
	}
	@Override
	public String toString() {
		return "LineItem [id=" + id + ", quantity=" + quantity + ", product=" + product + "]";
	}
	
	
}
