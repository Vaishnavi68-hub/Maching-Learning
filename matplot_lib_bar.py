# BAR PLOT

#from matplotlib import pyplot as plt
              #OR
              
'''import matplotlib.pyplot as plt

# PARAMETERS
x=["python" , "c", " c++" , "java"]
y=[85,70,63,82]
z=[20,30,40,50]

#@ for colors of every bar
c=["y","g","b","r"]

# bar graph1
plt.bar(x,y,color=c, edgecolor="b" , linewidth=1.5,linestyle=":" , alpha=0.4 , label="wscube" )

plt.legend() #for sshowing the title of the graph


# bar graph2
plt.bar(x,z,color=c, edgecolor="b" , linewidth=1.5,linestyle=":" , alpha=0.4 , label="wscube" )

# label and title 
plt.xlabel("languages")
plt.ylabel("popularity")
plt.title("xyz", fontsize=20)

# display the graph
plt.show()'''



















import matplotlib.pyplot as plt


import numpy as np

# PARAMETERS
x=["python" , "c", " c++" , "java"]
y=[85,70,63,82]
z=[20,30,40,50]

width=0.2
list=np.arange(len(x)) # array of index number of axex#index number of axes
list1 =list + width


# bar graph1
plt.bar(list1,y, edgecolor="b" , linewidth=1.5,linestyle=":" , alpha=0.4 , label="wscube" )

plt.legend() #for sshowing the title of the graph


# bar graph2
plt.bar(list1,z,edgecolor="b" , linewidth=1.5,linestyle=":" , alpha=0.4 , label="wscube" )

# label and title 
plt.xlabel("languages")
plt.ylabel("popularity")
plt.title("xyz", fontsize=20)

# display the graph
plt.show()