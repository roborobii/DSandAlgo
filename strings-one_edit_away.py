def one_edit_away(s1,s2):
	# return true if 1 edit away
	# 	meaning if you can edit one string to become the other
	# 	with one single edit then return true, else false 
	# 3 ways to edit a string
	# 	can change one character to be a diff character,
	# 	can delete one character
	#	add a character
	table = dict()
	# increment in s1
	# decrement in s2
	for char in s1:
		if char in table:
			