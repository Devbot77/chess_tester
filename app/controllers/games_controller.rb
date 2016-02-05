class GamesController < ApplicationController
	def index
	end

	def new
		@game = Game.new
	end

	def create
		@game = Game.create(game_params)
		redirect_to game_path(@game)
	end
end
