
#NUMPY ARRAYS
'''import numpy as np 
l= [10,20,30,40,50]
a=np.array(l)
print(a)'''

'''import numpy as np 
l=[10,20.20,10,10,10]
a =np.array(l)
print(a)
type(a)
'''

'''import numpy as np 
l=[10,'g', 20 ,30,40,50]
a=np.array(l)
print(a)'''

'''
import numpy as np 
l=[[10,20,30],[50,35,22],[60,44,67]]
a=np.array(l)
print(a)'''

'''import numpy as np 
a = np.arange(1,8)
print(a)'''


'''import numpy as np 
l=np.arange(10,22).reshape(3,4)
print(l)'''


'''import numpy as np 
l=np.zeros((2,2))
print(l)'''

''''import numpy as np 
l=[[60,20,30],[20,22,11]]
a=np.array(l)

x=a.ndim
y=a.shape
w=a.dtype
z=a.itemsize
print(x)
print(y)
print(w)
print(z)'''




#INDEXING AND SLICING



'''import numpy as np 
l=[10,20,30,40,50]
a=np.array(l)
print(a[1])
print(a[-1])
print(a[-2])
print(a[-4])'''

'''import numpy as np 
l=[10,20,30,40,50,60,70]
a=np.array(l)
print(a[1:5])
print(a[1:5:2])
print(a[1:3])'''


'''import numpy as np 
l=[10,20,33,49,54,22,122,65,77,10,40,60,60]
a=np.array(l)
print(a[0:6:1])
print(a[3:6:3])
print(a[3:6:2])'''




'''import numpy as np
l=[[20,30,40],[44,32,12],[44,56,10]]
a=np.array(l)

print(a[1:3,1:])'''




#ARITHEMATIC OPERATIONS 



'''import numpy as np
x=np.array([[1,2],[3,4]])
y=np.array([[11,12],[13,14]])

#add
z=x+y
print("addition")
print(z)

#subtarct
a=y-x
print("subtract")
print(a)

#element_wisemultiply
b=x*y
print("element-wise mul")
print(b)

#matrix_multiply
c=x @ y
print("matrix_mul")
print(c)

#divide
d=y/x
print("divide")
print(d)

#exponent
e=x**y
print("exponent")
print(e)

#modulus
m=x%y
print("modulus")
print(m)


#transpose
print(x.transpose())'''


#SORTING IN 2D ARRAY 

'''import numpy as np
a=np.array([[20,10,40],[10,50,20],[40,60,9]])
x=np.sort(a,axis=1)
print(x)

y=np.sort(a,axis=0) #axis=0
print(y)

#argsort- gives index of sorted array
#row wise
z=np.argsort(a,axis=1)
print(z)

#column wise
w=np.argsort(a,axis=0)
print(w)'''


#SORTING IN 1D ARRAY 

'''import numpy as np
a=np.array([10,20,50,70,20,80,27,9,40])


x=np.sort(a)
print(x)
#gives index of sorted array
y=np.argsort(a)
print(y)
'''
