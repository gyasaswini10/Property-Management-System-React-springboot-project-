package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.example.demo.model.Property;


@Repository
public interface PropertiesRepository extends JpaRepository<Property,Long>{

}
