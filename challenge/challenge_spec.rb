# frozen_string_literal: true

require_relative './challenge'

describe NumberConverter do
  let(:converter) { NumberConverter.new }

  describe '#into_to_roman' do
    it 'return 59 in roman numbers' do
      expect(converter.int_to_roman(59)).to eq('LIX')
    end
    it 'return 59 in roman numbers' do
      expect(converter.int_to_roman(36)).to eq('XXXVI')
    end
    it 'return 59 in roman numbers' do
      expect(converter.int_to_roman(284)).to eq('CCLXXXIV')
    end
    it 'return 59 in roman numbers' do
      expect(converter.int_to_roman(1500)).to eq('MD')
    end
    it 'return 59 in roman numbers' do
      expect(converter.int_to_roman(3927)).to eq('MMMCMXXVII')
    end
    it 'should throw error when input is invalid' do
      expect(converter.int_to_roman('')).to eq('Invalid Input')
    end
  end
end
