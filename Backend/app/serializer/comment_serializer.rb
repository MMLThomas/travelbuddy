class CommentSerializer
     include FastJsonapi::ObjectSerializer
     attributes :name, :content, :id
end