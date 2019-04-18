User.destroy_all
u1 = User.create :email => "jamaspy@gmail.com", :password => "chicken"
u2 = User.create :email => "aspin@me.com", :password => "chicken", :admin => true

Song.destroy_all
s1 = Song.create :title => "hello"
s2 = Song.create :title => "goodbye"
s3 = Song.create :title => "Maybe"
s4 = Song.create :title => "Yesterday"

Album.destroy_all
l1 = Album.create :title => "Album 1"
l2 = Album.create :title => "Album 2"
l3 = Album.create :title => "Album 3"
l4 = Album.create :title => "Album 4"

Artist.destroy_all
a1 = Artist.create :name => "Stereophonics"
a2 = Artist.create :name => "Blur"
a3 = Artist.create :name => "Oasis"
a4 = Artist.create :name => "Arctic Monkeys"

Genre.destroy_all
g1 = Genre.create :name => "Rock"
g2 = Genre.create :name => "Pop"
g3 = Genre.create :name => "Jazz"
g4 = Genre.create :name => "Dance"
g5 = Genre.create :name => "Country"
g6 = Genre.create :name => "R&B"

Mixtape.destroy_all
m1 = Mixtape.create :title => "Mixy1"
m2 = Mixtape.create :title => "Mixy2"
m3 = Mixtape.create :title => "Mixy3"
m4 = Mixtape.create :title => "Mixy4"
m5 = Mixtape.create :title => "Mixy5"

##Associations########
# Albums & Songs
l1.songs << s1
l2.songs << s2
l3.songs << s3
l4.songs << s4

# Artists & Songs
a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4

# Genres & Songs
s1.genres << g1 << g2
s1.genres << g5
s3.genres << g3 << g4
s4.genres << g6

# Mixtapes & Songs
m1.songs << s1 << s2 << s3 << s4
m2.songs << s2 << s2 << s2 << s3
m3.songs << s2 << s4 << s2 << s4
m4.songs << s4 << s3 << s1 << s2

#Mixtapes & Users
u1.mixtapes << m1 << m2
u2.mixtapes << m3 << m4
