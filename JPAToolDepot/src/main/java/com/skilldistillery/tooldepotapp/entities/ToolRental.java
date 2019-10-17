package com.skilldistillery.tooldepotapp.entities;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class ToolRental {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "tool_id")
	private Tool tool;
	
	private LocalDateTime checkout;
	private LocalDateTime returned;
	
	@Column(name="total_cost")
	private double totalCost;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "renter_id")
	private User renter;
	
	@OneToOne(mappedBy="rental")
	@JsonIgnore
	private ReviewOfLender lenderReview;
	
	@OneToOne(mappedBy="rental")
	@JsonIgnore
	private ReviewOfRenter renterReview;
	
	public ToolRental() {}

	public ToolRental(int id, Tool tool, LocalDateTime checkout, LocalDateTime returned, double totalCost,
			User renter) {
		super();
		this.id = id;
		this.tool = tool;
		this.checkout = checkout;
		this.returned = returned;
		this.totalCost = totalCost;
		this.renter = renter;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Tool getTool() {
		return tool;
	}

	public void setTool(Tool tool) {
		this.tool = tool;
	}

	public LocalDateTime getCheckout() {
		return checkout;
	}

	public void setCheckout(LocalDateTime checkout) {
		this.checkout = checkout;
	}

	public LocalDateTime getReturned() {
		return returned;
	}

	public void setReturned(LocalDateTime returned) {
		this.returned = returned;
	}

	public double getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}

	public User getRenter() {
		return renter;
	}

	public void setRenter(User renter) {
		this.renter = renter;
	}

	public ReviewOfLender getLenderReview() {
		return lenderReview;
	}

	public void setLenderReview(ReviewOfLender lenderReview) {
		this.lenderReview = lenderReview;
	}
	
	

	public ReviewOfRenter getRenterReview() {
		return renterReview;
	}

	public void setRenterReview(ReviewOfRenter renterReview) {
		this.renterReview = renterReview;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ToolRental [id=").append(id).append(", tool=").append(tool).append(", checkout=")
				.append(checkout).append(", returned=").append(returned).append(", totalCost=").append(totalCost)
				.append(", renter=").append(renter).append(", lenderReview=").append(lenderReview)
				.append(", renterReview=").append(renterReview).append("]");
		return builder.toString();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ToolRental other = (ToolRental) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	

}
