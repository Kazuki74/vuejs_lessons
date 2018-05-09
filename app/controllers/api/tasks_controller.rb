class Api::TasksController < ApplicationController

	def index
		@tasks = Task.order("updated_at DESC")
	end

	def create
		@task = Task.new(task_params)

		if @task.save
			render :show, status: :created
		else
			rendr json: @task.errors, status: :unproccessable_entity
		end
	end

	def update
		@task = Task.find(params[:id])
		if @task.update(task_params)
			render :show, status: :ok
		else
			render json: @task.errors, status: :unproccessable_entity
		end
	end

	private
		def task_params
			params.fetch(:task, {}).permit(
				:name, :is_done
			)
		end
end