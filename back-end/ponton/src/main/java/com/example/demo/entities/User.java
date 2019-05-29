package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "\"user\"")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private Integer userId;

    private String nickname;

    private String email;

    @JsonIgnore
    private String password;

    @CreationTimestamp
    @Setter(AccessLevel.NONE)
    private Date createDate;

    @UpdateTimestamp
    @Setter(AccessLevel.NONE)
    private Date modifiedDate;

    @ColumnDefault("false")
    private Boolean ban;

    private String role;
}
