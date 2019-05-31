package com.example.demo.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Integer categoryId;

    @Column(unique = true)
    private String name;

    @UpdateTimestamp
    @Setter(AccessLevel.NONE)
    private Date modifiedDate;
}
