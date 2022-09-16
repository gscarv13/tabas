Rails.application.routes.draw do
  resources :properties, only: %i[index]

  # Defines the root path route ("/")
  # root "articles#index"
end
