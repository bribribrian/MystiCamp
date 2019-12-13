class Api::SessionsController < ApplicationController
   
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        
        if @user
            login(@user)
            # render ""
            render 'api/users/show'
        else   
            render json: ["!  Invalid email or password."], status: 401
        end
    end

    def destroy
        logout
        render json: ["logout successful"]
    end
end