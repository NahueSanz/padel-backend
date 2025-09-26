package com.padel.social.padelbackend.model;

public class User {
    private Long id;
    private String name;
    private int age;
    private String type; // "player" o "court"
    private boolean isPremium;
    private int points;

    // Constructor
    public User(Long id, String name, int age, String type, boolean isPremium, int points) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.type = type;
        this.isPremium = isPremium;
        this.points = points;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public boolean getIsPremium() { return isPremium; }
    public void setIsPremium(boolean isPremium) { this.isPremium = isPremium; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
}
