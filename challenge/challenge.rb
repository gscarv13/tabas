# frozen_string_literal: true

# This Class is responsible for converting number to different notations
class NumberConverter
  ROMAN_NUMBERS = [
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M']
  ].freeze

  def int_to_roman(int)
    return 'Invalid Input' unless int.is_a?(Integer)

    current = int
    pointer = ROMAN_NUMBERS.length - 1
    res = []

    while current != 0
      value, symbol = ROMAN_NUMBERS[pointer]

      if value <= current
        res << symbol
        current -= value
      else
        pointer -= 1
      end
    end

    res.join('')
  end
end
