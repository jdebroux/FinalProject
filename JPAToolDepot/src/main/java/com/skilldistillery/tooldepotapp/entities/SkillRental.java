package com.skilldistillery.tooldepotapp.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class SkillRental {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="start_date")
	private LocalDateTime startDate;
	
	@Column(name="finish_date")
	private LocalDateTime finishDate;
	
	private Integer hours;
	
	@ManyToOne
	@JoinColumn(name="user_skill_user_id")
	private User worker;
	
	@ManyToOne
	@JoinColumn(name="user_skill_skill_id")
	private Skill skill;
	
	@ManyToOne
	@JoinColumn(name="renter_id")
	private User renter;
	
}
