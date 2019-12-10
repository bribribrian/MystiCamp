Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:index, :show, :create]
    resources :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
