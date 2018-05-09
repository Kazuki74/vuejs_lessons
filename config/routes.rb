Rails.application.routes.draw do
	root to: 'home#index'
	get '/about' => 'home#index'
	get '/contact' => 'home#index'
	get '/app' => 'home#app'
	get '/markdown' => 'home#markdown'

	namespace :api, format: 'json' do
		resources :tasks, only: [:index, :create, :update]
	end
end
