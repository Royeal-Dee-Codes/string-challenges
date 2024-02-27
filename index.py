# Challenge 1

def is_string(input):
    return isinstance(input, str)


print("Answer 1")
print(is_string("abc"))
print(is_string(190))


# Challenge 2

def is_blank_string(input):
    return input.strip() == ''


print("Answer 2")
print(is_blank_string(""))
print(is_blank_string(" "))
print(is_blank_string("fjfjf"))


# Challenge 3

def capitalize_first(input_string):
    return input_string.capitalize()


print("Answer 3")
print(capitalize_first("abccdef"))


# Challenge 4

def abbr(full_name):
    name_parts = full_name.split()
    first_name = name_parts[0]
    last_name_initial = name_parts[-1][0] + "."
    return first_name + " " + last_name_initial


print("Answer 4")
print(abbr("Ryan Curtis"))


# Challenge 5

def truncate(sentence, max_length):
    if len(sentence) <= max_length:
        return sentence
    else:
        return sentence[:max_length] + "..."


print("Answer 5")
print(truncate("I am long sentence", 5))


# Challenge 6

str = "The practitioners grappled on the road side!"
result = str[str.index("g"):]
print("Answer 6")
print(result)
