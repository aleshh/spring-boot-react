package com.example.demo.restservice;

public class AlbumForm {
  public String name;
  public String artist;

  public AlbumForm(String name, String artist) {
    this.name = name;
    this.artist = artist;
  }

  public String getName() {
    return this.name;
  }

  public String getArtist() {
    return this.artist;
  }
}

