import pandas as pd


df=pd.read_csv("sample.csv")
print(df)


print(df.head(3))
print(df.shape)



#NULLdekh

print(df.isnull().sum())

print(df.isnull().sum()/df.shape[0]*100)

print(df.isnull().sum().sum())


print(df.notnull().sum())