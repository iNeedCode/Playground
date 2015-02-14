class String

	def titlesize
		self.split(' ').collect { |word| word.capitalize}.join(" ")
	end
end