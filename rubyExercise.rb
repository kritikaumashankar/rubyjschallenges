require 'titleize'

def palindrome(str)
  str = str.downcase.gsub(/\s/,'')
  result = str == str.reverse ? "is a palindrome" : " not a palindrome"
  puts "#{str} #{result}"
end

def string_order(str)
  puts str.chars.sort.join
end

def str_capitalize(str)
  #used titleize gem
  puts str.titleize
end

def longest_word(str)
  arr = str.split(/\s/)
  arr1 = arr.sort_by{|a| a.length}
  puts arr1.last
end

def vowel_count(str)
  regex =/[aeiou]/
  c=0
  for i in (0..str.length)
    if str[i] =~ regex
      c = c + 1
    end
  end
  puts c
end

def prime_number(num)
  if num == 0 || num == 1
     false
  elsif 
    (2...num).each { |i|
      return num%i == 0 ? false : true
    } 
  end
end

def type_func(obj)
  puts obj.class
end

def second_small_large(arr)
  arr = arr.sort
  puts "Smallest: #{arr[1]}; Largest: #{arr[arr.length-2]}"
end

def factor_of_number(num)
  str=''
  (2..num).each do |i|
    while num % i == 0
      str = str + i.to_s + " "
      num=num/i
    end
  end
  puts str
end

def amount_to_coins(amt)
  arr=[]
  while amt > 0
    if amt > 25
      arr.push 25
      amt = amt - 25
    elsif amt >=10 && amt <25
      arr.push 10
      amt = amt - 10
    elsif amt >=2 && amt <10
      arr.push 2
      amt = amt - 2
    elsif amt == 1
      arr.push 1
      amt = amt - 1
    else
      puts "Invalid input"
    end
  end
  puts "#{arr}"
end
#palindrome('nurses run')
#string_order('webmaster')
#str_capitalize("aanya is a good girl")
#longest_word("Web Developement Tutorial")
#vowel_count('The quick brown fox')
#puts prime_number(11)
#type_func(12.3)
#second_small_large([33,5,21,99,6])
# factor_of_number(81)
amount_to_coins(46)