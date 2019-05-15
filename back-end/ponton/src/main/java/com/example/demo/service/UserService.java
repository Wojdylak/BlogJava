package com.example.demo.service;

import com.example.demo.DTO.UserDTO;
import com.example.demo.DTO.UserPrincipal;
import com.example.demo.entities.User;
import com.example.demo.exceptions.EntityNotFoundException;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUsersByEmail(email).get(0);
        if (user != null){
            return buildUserForAuth(user);
        } else {
            throw new UsernameNotFoundException("Unauthorized");
        }
    }

    private org.springframework.security.core.userdetails.User buildUserForAuth(User user){
        return new org.springframework.security.core.userdetails.User(user.getNickname(), user.getPassword(), buildUserAuth(user.getRole()));
    }

    private List<GrantedAuthority> buildUserAuth(String role){
        List<GrantedAuthority> list = new ArrayList<>();
        list.add(new SimpleGrantedAuthority(role));
        return list;
    }

    public List<User> getAllUser(){ return userRepository.findAll();}

    public User getUserById(Integer userId){
        return userRepository.findById(userId).orElseThrow(()-> new EntityNotFoundException("user"));
    }

    public User createUser(UserDTO userDTO){
        User user = new User();
        user.setRole("user");
        return userRepository.save(castUserDTOToUser(user, userDTO));
    }

    public User updateUser(Integer userId, UserDTO userDTO){
        User user = userRepository.findById(userId).orElseThrow(()-> new EntityNotFoundException("user"));
        return userRepository.save(castUserDTOToUser(user, userDTO));
    }

    public void banUser(Integer userId){
        User user = userRepository.findById(userId).orElseThrow(()-> new EntityNotFoundException("user"));
        user.setBan(true);
        userRepository.save(user);
    }

    public void deleteUser(Integer userId){
        User user = userRepository.findById(userId).orElseThrow(()-> new EntityNotFoundException("user"));
        userRepository.delete(user);
    }

    private User castUserDTOToUser(User user, UserDTO userDTO){
        user.setNickname(userDTO.getNickname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
        return user;
    }

    public UserPrincipal getUserPrincipal() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            String currentUserRole = ((GrantedAuthority)authentication.getAuthorities().toArray()[0]).getAuthority();
            return new UserPrincipal(currentUserName, currentUserRole);
        }
        return null;
    }
}
