json.extract! project, :id, :name, :description, :created_at, :updated_at
json.tools(project.tools, :id, :name, :description)