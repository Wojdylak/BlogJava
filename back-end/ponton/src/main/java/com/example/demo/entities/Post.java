package com.example.demo.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
public class Post implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Integer postId;

    @ManyToOne(cascade = {CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_users")
    private User user;

    @ManyToOne(cascade = {CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinColumn(name = "posts_categories")
    private Category category;

    private String title;

    @Length(max = 10000)
    private String text;

    @CreationTimestamp
    @Setter(AccessLevel.NONE)
    private Date createDate;

    @UpdateTimestamp
    @Setter(AccessLevel.NONE)
    private Date modifiedDate;
}
