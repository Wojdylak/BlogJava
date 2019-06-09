package com.example.demo.repository;

import com.example.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    List<User> findUsersByEmail(String email);

    List<User> findUsersByNickname(String nickname);
    User findAllByNicknameIn(String nickame);
    boolean existsByNickname(String nickname);
    boolean existsByEmail(String email);
}
