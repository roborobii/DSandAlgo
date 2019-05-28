# assume lowercase letters in string only
# key shifts to the right and 'wrap' around at z
# ex: "zab",1 ->"abc" 

def caesarCipherEncryptor(string, key): # O(N) time, O(N) space
    # for each lowercase character in the string, turn in into ascii decimal value
	# 'a' is 97, 'z' is 122
	# shift it by the key positions if it is over 'z' then wrap around by subtracting 26
	key = key % 26
	result = []
	for i in range(len(string)):
		deci = ord(string[i]) + key
		# while deci > ord('z'):
		# 	deci -= 26
		if deci <= 122:
			result.append(chr(deci))
		else:
			# result += chr(96 + ((deci % 122) % 26))
			result.append(chr(96 + (deci % 122)))
	return "".join(result)

def caesarCipherEncryptor2(string, key): # O(N) time, O(N) space
	key = key % 26
	result = []
	for i in range(len(string)):
		result.append(caesarCipherEncryptor2_helper(string[i],key))
	return "".join(result)

def caesarCipherEncryptor2_helper(character,key):
	deci = ord(character) + key
	if deci <= 122:
		return chr(deci)
	else:
		return chr(96 + (deci % 122))