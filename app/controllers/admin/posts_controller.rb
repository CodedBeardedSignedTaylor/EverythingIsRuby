class Admin::PostsController < ApplicationController
	def new
		@post = Post.new
	end

	def create
  		@post = Post.new(post_params)
  		respond_to do |format| 
	 		if @post.save
	  			format.html { redirect_to admin_posts_url, 
	  				notice: 'Post was successfully created.' }
	  			format.json {render json: @post, status: created,
	  				location: [:admin, @post]}
	  		else
	  			format.html { render action: "new" }
	  			format.json { render json: @post.errors, 
	  				status: :unprocessable_entity }
	  		end
	  	end
	end

	def show
		@post = Post.find(params[:id])
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		redirect_to posts_path
	end

	def index
		@posts = Post.all
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(post_params)
			redirect_to @post 
		else
			render 'edit'
		end
	end

	private
		def post_params
			params.require(:post).permit(:title, :text)
		end
end