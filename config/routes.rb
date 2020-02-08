Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resources :listings, only: [:index, :show, :create]
    resources :bookings, only: [:index, :create, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
