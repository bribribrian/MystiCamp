class Api::UsersController < ApplicationController
 

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'
        else  
            # render json: @user.errors.full_messages, status: 422
            render json: ["!  Required field blank."], status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :f_name, :l_name, :email, :lat, :lng, :zip)
    end

end