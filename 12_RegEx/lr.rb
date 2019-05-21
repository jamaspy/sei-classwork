# lr.rb a Ruby Line Reader
# Usage: ruby lr.rb /etc/passwrd

#ARGF is an array of the lines of each file metioned in ARGV
ARGF.each do |line|
  puts line if line =~ /^[A-Z]\w*/
end
