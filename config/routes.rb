Rails.application.routes.draw do
	root to: 'home#index'
	get '/app' => 'home#app'
	get '/markdown' => 'home#markdown'
end
