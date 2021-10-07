let questions = [
  {
    id: 1,
    Question:
      "Which was the first purely object oriented programming language developed?",
    Options: ["a) Java", "b) C++", "c) SmallTalk", "d) Kotlin"],
    Answer:
      "Answer: c\nExplanation: SmallTalk was the first programming language developed which was purely object oriented. It was developed by Alan Kay. OOP concept came into the picture in 1970’s.",
  },
  {
    id: 2,
    Question: "Which of the following best defines a class?",
    Options: [
      "a) Parent of an object",
      "b) Instance of an object",
      "c) Blueprint of an object",
      "d) Scope of an object",
    ],
    Answer:
      "Answer: c\nExplanation: A class is Blueprint of an object which describes/ shows all the functions and data that are provided by an object of a specific class. It can’t be called as parent or instance of an object. Class in general describes all the properties of an object.",
  },
  {
    id: 3,
    Question: "Who invented OOP?",
    Options: [
      "a) Alan Kay",
      "b) Andrea Ferro",
      "c) Dennis Ritchie",
      "d) Adele Goldberg",
    ],
    Answer:
      "Answer: a\nExplanation: Alan Kay invented OOP, Andrea Ferro was a part of SmallTalk Development. Dennis invented C++ and Adele Goldberg was in team to develop SmallTalk but Alan actually had got rewarded for OOP.",
  },
  {
    id: 4,
    Question:
      "What is the additional feature in classes that was not in structures?",
    Options: [
      "a) Data members",
      "b) Member functions",
      "c) Static data allowed",
      "d) Public access specifier",
    ],
    Answer:
      "Answer: b\nExplanation: Member functions are allowed inside a class but were not present in structure concept.  Data members, static data and public access specifiers were present in structures too.",
  },
  {
    id: 5,
    Question: "Which is not feature of OOP in general definitions?",
    Options: [
      "a) Code reusability",
      "b) Modularity",
      "c) Duplicate/Redundant data",
      "d) Efficient Code",
    ],
    Answer:
      "Answer: c\nExplanation: Duplicate/Redundant data is dependent on programmer and hence can’t be guaranteed by OOP. Code reusability is done using inheritance. Modularity is supported by using different code files and classes. Codes are more efficient because of features of OOP.",
  },
  {
    id: 6,
    Question: "Which Feature of OOP illustrated the code reusability?",
    Options: [
      "a) Polymorphism",
      "b) Abstraction",
      "c) Encapsulation",
      "d) Inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: It’s false because for a program to be pure OO, everything must be written inside classes. If this rule is violated, the program can’t be labelled as purely OO.",
  },
  {
    id: 7,
    Question: "Which language does not support all 4 types of inheritance?",
    Options: ["a) C++", "b) Java", "c) Kotlin", "d) Small Talk"],
    Answer:
      "Answer: d\nExplanation: Using inheritance we can reuse the code already written and also can avoid creation of many new functions or variables, as that can be done one time and be reused, using classes.",
  },
  {
    id: 8,
    Question: "How many classes can be defined in a single program?",
    Options: [
      "a) Only 1",
      "b) Only 100",
      "c) Only 999",
      "d) As many as you want",
    ],
    Answer:
      "Answer: b\nExplanation: Java doesn’t support all 4 types of inheritance. It doesn’t support multiple inheritance. But the multiple inheritance can be implemented using interfaces in Java.",
  },
  {
    id: 9,
    Question: "When OOP concept did first came into picture?",
    Options: ["a) 1970’s", "b) 1980’s", "c) 1993", "d) 1995"],
    Answer:
      "Answer: d\nExplanation: Any number of classes can be defined inside a program, provided that their names are different. In java, if public class is present then it must have the same name as that of file.",
  },
  {
    id: 10,
    Question: "Why Java is Partially OOP language?",
    Options: [
      "a) It supports usual declaration of primitive data types",
      "b) It doesn’t support all types of inheritance",
      "c) It allows code to be written outside classes",
      "d) It does not support pointers",
    ],
    Answer:
      "Answer: a\nExplanation: OOP first came into picture in 1970’s by Alan and his team. Later it was used by some programming languages and got implemented successfully, SmallTalk was first language to use pure OOP and followed all rules strictly.",
  },
  {
    id: 11,
    Question: "Which concept of OOP is false for C++?",
    Options: [
      "a) Code can be written without using classes",
      "b) Code must contain at least one class",
      "c) A class must have member functions",
      "d) At least one object should be declared in code",
    ],
    Answer:
      "Answer: a\nExplanation: As Java supports usual declaration of data variables, it is partial implementation of OOP. Because according to rules of OOP, object constructors must be used, even for declaration of variables.",
  },
  {
    id: 12,
    Question: "Which header file is required in C++ to use OOP?",
    Options: [
      "a) iostream.h",
      "b) stdio.h",
      "c) stdlib.h",
      "d) OOP can be used without using any header file",
    ],
    Answer:
      "Answer: b\nExplanation: In C++, it’s not necessary to use classes, and hence codes can be written without using OOP concept. Classes may or may not contain member functions, so it’s not a necessary condition in C++. And, an object can only be declared in a code if its class is defined/included via header file.",
  },
  {
    id: 13,
    Question: "Which of the two features match each other?",
    Options: [
      "a) Inheritance and Encapsulation",
      "b) Encapsulation and Polymorphism",
      "c) Encapsulation and Abstraction",
      "d) Abstraction and Polymorphism",
    ],
    Answer:
      "Answer: d\nExplanation: We need not include any specific header file to use OOP concept in C++, only specific functions used in code need their respective header files to be included or classes should be defined if needed.",
  },
  {
    id: 14,
    Question: "Which feature allows open recursion, among the following?",
    Options: [
      "a) Use of this pointer",
      "b) Use of pointers",
      "c) Use of pass by value",
      "d) Use of parameterized constructor",
    ],
    Answer:
      "Answer: c\nExplanation: Encapsulation and Abstraction are similar features. Encapsulation is actually binding all the properties in a single class or we can say hiding all the features of object inside a class. And Abstraction is hiding unwanted data (for user) and showing only the data required by the user of program.",
  },
  {
    id: 15,
    Question: "Which of the following is not type of class?",
    Options: [
      "a) Abstract Class",
      "b) Final Class",
      "c) Start Class",
      "d) String Class",
    ],
    Answer:
      "Answer: c\nExplanation: Only 9 types of classes are provided in general, namely, abstract, final, mutable, wrapper, anonymous, input-output, string, system, network. We may further divide the classes into parent class and subclass if inheritance is used.",
  },
  {
    id: 16,
    Question: "Class is pass by _______",
    Options: [
      "a) Value",
      "b) Reference",
      "c) Value or Reference, depending on program",
      "d) Copy",
    ],
    Answer:
      "Answer: b\nExplanation: Classes are pass by reference, and the structures are pass by copy. It doesn’t depend on the program.",
  },
  {
    id: 17,
    Question:
      "What is default access specifier for data members or member functions declared within a class without any specifier, in C++?",
    Options: [
      "a) Private",
      "b) Protected",
      "c) Public",
      "d) Depends on compiler",
    ],
    Answer:
      "Answer: a\nExplanation: The data members and member functions are Private by default in C++ classes, if none of the access specifier is used. It is actually made to increase the privacy of data.",
  },
  {
    id: 18,
    Question:
      '4. Which is most appropriate comment on following class definition?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> Student \n<span class="br0">{</span>\n    <span class="kw4">int</span> a<span class="sy4">;</span> \n    <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">float</span> a<span class="sy4">;</span> \n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Error : same variable name can’t be used twice",
      "b) Error : Public must come first",
      "c) Error : data types are different for same variable",
      "d) It is correct",
    ],
    Answer:
      "Answer: a\nExplanation: Same variable can’t be defined twice in same scope. Even if the data types are different, variable name must be different. There is no rule like Public member should come first or last.",
  },
  {
    id: 19,
    Question: "Which is known as a generic class?",
    Options: [
      "a) Abstract class",
      "b) Final class",
      "c) Template class",
      "d) Efficient Code",
    ],
    Answer:
      "Answer: c\nExplanation: Template classes are known to be generic classes because those can be used for any data type value and the same class can be used for all the variables of different data types.",
  },
  {
    id: 20,
    Question: "Size of a class is _____________",
    Options: [
      "a) Sum of the size of all the variables declared inside the class",
      "b) Sum of the size of all the variables along with inherited variables in the class",
      "c) Size of the largest size of variable",
      "d) Classes doesn’t have any size",
    ],
    Answer:
      "Answer: d\nExplanation: Classes doesn’t have any size, actually the size of object of the class can be defined. That is done only when an object is created and its constructor is called.",
  },
  {
    id: 21,
    Question:
      "Which class can have member functions without their implementation?",
    Options: [
      "a) Default class",
      "b) String class",
      "c) Template class",
      "d) Abstract class",
    ],
    Answer:
      "Answer: d\nExplanation: Abstract classes can have member functions with no implementation, where the inheriting subclasses must implement those functions.",
  },
  {
    id: 22,
    Question: "Which of the following describes a friend class?",
    Options: [
      "a) Friend class can access all the private members of the class, of which it is a friend",
      "b) Friend class can only access protected members of the class, of which it is a friend",
      "c) Friend class don’t have any implementation",
      "d) Friend class can’t access any data member of another class but can use it’s methods",
    ],
    Answer:
      "Answer: a\nExplanation: A friend class can access all the private members of another class, of which it is a friend. It is a special class provided to use when you need to reuse the data of a class but don’t want that class to have those special functions.",
  },
  {
    id: 23,
    Question: "What is the scope of a class nested inside another class?",
    Options: [
      "a) Protected scope",
      "b) Private scope",
      "c) Global scope",
      "d) Depends on access specifier and inheritance used",
    ],
    Answer:
      "Answer: d\nExplanation: It depends on the access specifier and the type of inheritance used with the class, because if the class is inherited then the nested class can be used by subclass too, provided it’s not of private type.",
  },
  {
    id: 24,
    Question:
      "Which among the following is false, for a member function of a class?",
    Options: [
      "a) All member functions must be defined",
      "b) Member functions can be defined inside or outside the class body",
      "c) Member functions need not be declared inside the class definition",
      "d) Member functions can be made friend to another class using the friend keyword",
    ],
    Answer:
      "Answer: a\nExplanation: The class containing main function can be inherited and hence the program can be executed using the derived class names also in java.",
  },
  {
    id: 25,
    Question: "Which syntax for class definition is wrong?",
    Options: [
      "a) class student{ };",
      "b) student class{ };",
      "c) class student{ public: student(int a){ } };",
      "d) class student{ student(int a){} };",
    ],
    Answer:
      "Answer: c\nExplanation: Member functions must be declared inside class body, though the definition can be given outside the class body. There is no way to declare the member functions outside the class.",
  },
  {
    id: 26,
    Question: "Which of the following pairs are similar?",
    Options: [
      "a) Class and object",
      "b) Class and structure",
      "c) Structure and object",
      "d) Structure and functions",
    ],
    Answer:
      "Answer: b\nExplanation: Keyword class should come first. Class name should come after keyword class. Parameterized constructor definition depends on programmer so it can be left empty also. ",
  },
  {
    id: 27,
    Question: "Which among the following is false for class features?",
    Options: [
      "a) Classes may/may not have both data members and member functions",
      "b) Class definition must be ended with a colon",
      "c) Class can have only member functions with no data members",
      "d) Class is similar to union and structures",
    ],
    Answer:
      "Answer: b\nExplanation: Class and structure are similar to each other. Only major difference is that a structure doesn’t have member functions whereas the class can have both data members and member functions.",
  },
  {
    id: 28,
    Question: "Instance of which type of class can’t be created?",
    Options: [
      "a) Anonymous class",
      "b) Nested class",
      "c) Parent class",
      "d) Abstract class",
    ],
    Answer:
      "Answer: b\nExplanation: Class definition must end with a semicolon, not colon. Class can have only member functions in its body with no data members.",
  },
  {
    id: 29,
    Question: "Which definition best describes an object?",
    Options: [
      "a) Instance of a class",
      "b) Instance of itself",
      "c) Child of a class",
      "d) Overview of a class",
    ],
    Answer:
      "Answer: a\nExplanation: An object is instance of its class. It can be declared in the same way that a variable is declared, only thing is you have to use class name as the data type. ",
  },
  {
    id: 30,
    Question:
      "How many objects can be declared of a specific class in a single program?",
    Options: ["a) 32768", "b) 127", "c) 1", "d) As many as you want"],
    Answer:
      "Answer: d\nExplanation: You can create as many objects of a specific class as you want, provided enough memory is available. ",
  },
  {
    id: 31,
    Question: "Which among the following is false?",
    Options: [
      "a) Object must be created before using members of a class",
      "b) Memory for an object is allocated only after its constructor is called",
      "c) Objects can’t be passed by reference",
      "d) Objects size depends on its class data members",
    ],
    Answer:
      "Answer: c\nExplanation: Objects can be passed by reference. Objects can be passed by value also. If the object of a class is not created, we can’t use members of that class.",
  },
  {
    id: 32,
    Question: "Which of the following is incorrect?",
    Options: [
      "a) class student{  }s;",
      "b) class student{  };   student s;",
      "c) class student{  }s[];",
      "d) class student{  }; student s[5];",
    ],
    Answer:
      "Answer: c\nExplanation: The array must be specified with a size. You can’t declare object array, or any other linear array without specifying its size. It’s a mandatory field.",
  },
  {
    id: 33,
    Question: "The object can’t be __________",
    Options: [
      "a) Passed by reference",
      "b) Passed by value",
      "c) Passed by copy",
      "d) Passed as function",
    ],
    Answer:
      "Answer: d\nExplanation: Object can’t be passed as function as it is an instance of some class, it’s not a function. Object can be passed by reference, value or copy. There is no term defined as pass as function for objects.",
  },
  {
    id: 34,
    Question:
      '6. What is size of the object of following class (64 bit system)?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student <span class="br0">{</span>  <span class="kw4">int</span> rollno<span class="sy4">;</span>  <span class="kw4">char</span>  name<span class="br0">[</span><span class="nu0">20</span><span class="br0">]</span><span class="sy4">;</span>  <span class="kw4">static</span> <span class="kw4">int</span> studentno<span class="sy4">;</span>  <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) 20", "b) 22", "c) 24", "d) 28"],
    Answer:
      "Answer: c\nExplanation: The size of any object of student class will be of size 4+20=24, because static members are not really considered as property of a single object. So static variables size will not be added.",
  },
  {
    id: 35,
    Question: "How members of an object are accessed?",
    Options: [
      "a) Using dot operator/period symbol",
      "b) Using scope resolution operator",
      "c) Using member names directly",
      "d) Using pointer only",
    ],
    Answer:
      "Answer: b\nExplanation: Functions can always return an object if the return type is same as that of object being returned. Care has to be taken while writing the prototype of the function. ",
  },
  {
    id: 36,
    Question:
      "If a local class is defined in a function, which of the following is true for an object of that class?",
    Options: [
      "a) Object is accessible outside the function",
      "b) Object can be declared inside any other function",
      "c) Object can be used to call other class members",
      "d) Object can be used/accessed/declared locally in that function",
    ],
    Answer:
      "Answer: a\nExplanation: Using dot operator after the name of object we can access its members. It is not necessary to use the pointers. We can’t use the names directly because it may be used outside the class.",
  },
  {
    id: 37,
    Question: "Which among the following is wrong?",
    Options: [
      "a) class student{  }; student s;",
      "b) abstract class student{  }; student s;",
      "c) abstract class student{  }s[50000000];",
      "d) abstract class student{  }; class toppers: public student{  }; topper t;",
    ],
    Answer:
      "Answer: d\nExplanation: For an object which belongs to a local class, it is mandatory to declare and use the object within the function because the class is accessible locally within the class only.",
  },
  {
    id: 38,
    Question: "Object declared in main() function _____________",
    Options: [
      "a) Can be used by any other function",
      "b) Can be used by main() function of any other program",
      "c) Can’t be used by any other function",
      "d) Can be accessed using scope resolution operator",
    ],
    Answer:
      "Answer: b\nExplanation: We can never create instance of an abstract class. Abstract classes doesn’t have constructors and hence when an instance is created there is no facility to initialize its members. Option d is correct because topper class is inheriting the base abstract class student, and hence topper class object can be created easily. ",
  },
  {
    id: 39,
    Question: "When an object is returned___________",
    Options: [
      "a) A temporary object is created to return the value",
      "b) The same object used in function is used to return the value",
      "c) The Object can be returned without creation of temporary object",
      "d) Object are returned implicitly, we can’t say how it happens inside program",
    ],
    Answer:
      "Answer: c\nExplanation: The object declared in main() have local scope inside main() function only. It can’t be used outside main() function. Scope resolution operator is used to access globally declared variables/objects.",
  },
  {
    id: 40,
    Question: "Which among the following is correct?",
    Options: [
      "a) class student{  }s1,s2; s1.student()=s2.student();",
      "b) class student{  }s1; class topper{  }t1; s1=t1;",
      "c) class student{  }s1,s2; s1=s2;",
      "d) class student{  }s1; class topper{  }t1; s1.student()=s2.topper();",
    ],
    Answer:
      "Answer: a\nExplanation: A temporary object is created to return the value. It is created because the object used in function is destroyed as soon as the function is returned. The temporary variable returns the value and then gets destroyed.",
  },
  {
    id: 41,
    Question:
      '14. Which among following is correct for initializing the class below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student<span class="br0">{</span>\n<span class="kw4">int</span> marks<span class="sy4">;</span>\n<span class="kw4">int</span> cgpa<span class="sy4">;</span>\n<span class="kw2">public</span><span class="sy4">:</span> student<span class="br0">(</span><span class="kw4">int</span> i, <span class="kw4">int</span>  j<span class="br0">)</span><span class="br0">{</span>\nmarks<span class="sy1">=</span>I<span class="sy4">;</span>\ncgpa<span class="sy1">=</span>j\n<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) student s[3]={  s(394, 9); s(394, 9); s(394,9); };",
      "b) student s[2]={   s(394,9), s(222,5)  };",
      "c) student s[2]={   s1(392,9), s2(222,5)   };",
      "d) student s[2]={   s[392,9],   s2[222,5]   };",
    ],
    Answer:
      "Answer: c\nExplanation: Only if the objects are of same class then their data can be copied from to another using assignment operator. This actually comes under operator overloading. Class constructors can’t be assigned any explicit value as in option class student{  }s1; class topper{  }t1; s1=t1; and class student{  }s1; class topper{  }t1; s1.student()=s2.topper();.",
  },
  {
    id: 42,
    Question: "Which feature of OOP indicates code reusability?",
    Options: [
      "a) Encapsulation",
      "b) Inheritance",
      "c) Abstraction",
      "d) Polymorphism",
    ],
    Answer:
      "Answer: b\nExplanation: Inheritance indicates the code reusability. Encapsulation and abstraction are meant to hide/group data into one element. Polymorphism is to indicate different tasks performed by a single entity.",
  },
  {
    id: 43,
    Question:
      "If a function can perform more than 1 type of tasks, where the function name remains same, which feature of OOP is used here?",
    Options: [
      "a) Encapsulation",
      "b) Inheritance",
      "c) Polymorphism",
      "d) Abstraction",
    ],
    Answer:
      "Answer: c\nExplanation: For the feature given above, the OOP feature used is Polymorphism. Example of polymorphism in real life is a kid, who can be a student, a son, a brother depending on where he is.",
  },
  {
    id: 44,
    Question:
      "If different properties and functions of a real world entity is grouped or embedded into a single element, what is it called in OOP language?",
    Options: [
      "a) Inheritance",
      "b) Polymorphism",
      "c) Abstraction",
      "d) Encapsulation",
    ],
    Answer:
      "Answer: d\nExplanation: It is Encapsulation, which groups different properties and functions of a real world entity into single element. Abstraction, on other hand, is hiding of functional or exact working of codes and showing only the things which are required by the user.",
  },
  {
    id: 45,
    Question: "Which of the following is not a feature of pure OOP?",
    Options: [
      "a) Classes must be used",
      "b) Inheritance",
      "c) Data may/may not be declared using object",
      "d) Functions Overloading",
    ],
    Answer:
      "Answer: c\nExplanation: Data must be declared using objects. Object usage is mandatory because it in turn calls its constructors, which in turn must have a class defined. If object is not used, it is a violation of pure OOP concept.",
  },
  {
    id: 46,
    Question: "Which among the following doesn’t come under OOP concept?",
    Options: [
      "a) Platform independent",
      "b) Data binding",
      "c) Message passing",
      "d) Data hiding",
    ],
    Answer:
      "Answer: a\nExplanation: Platform independence is not feature of OOP. C++ supports OOP but it’s not a platform independent language. Platform independence depends on programming language.",
  },
  {
    id: 47,
    Question:
      '6. Which feature of OOP is indicated by the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student<span class="br0">{</span>  <span class="kw4">int</span> marks<span class="sy4">;</span>  <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> topper<span class="sy4">:</span><span class="kw2">public</span> student<span class="br0">{</span>  <span class="kw4">int</span> age<span class="sy4">;</span>  topper<span class="br0">(</span><span class="kw4">int</span> age<span class="br0">)</span><span class="br0">{</span> <span class="kw3">this</span>.<span class="me1">age</span><span class="sy1">=</span>age<span class="sy4">;</span> <span class="br0">}</span> <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Inheritance",
      "b) Polymorphism",
      "c) Inheritance and polymorphism",
      "d) Encapsulation and Inheritance",
    ],
    Answer:
      "Answer: d\nExplanation: Encapsulation is indicated by use of classes. Inheritance is shown by inheriting the student class into topper class. Polymorphism is not shown here because we have defined the constructor in the topper class but that doesn’t mean that default constructor is overloaded.",
  },
  {
    id: 48,
    Question:
      "Which feature may be violated if we don’t use classes in a program?",
    Options: [
      "a) Inheritance can’t be implemented",
      "b) Object must be used is violated",
      "c) Encapsulation only is violated",
      "d) Basically all the features of OOP gets violated",
    ],
    Answer:
      "Answer: d\nExplanation: All the features are violated because Inheritance and Encapsulation won’t be implemented. Polymorphism and Abstraction are still possible in some cases, but the main features like data binding, object use and etc won’t be used hence the use of class is must for OOP concept.",
  },
  {
    id: 49,
    Question:
      "How many basic features of OOP are required for a programming language to be purely OOP?",
    Options: ["a) 7", "b) 6", "c) 5", "d) 4"],
    Answer:
      "Answer: a\nExplanation: There are 7 basic features that define whether a programing language is pure OOP or not. The 4 basic features are inheritance, polymorphism, encapsulation and abstraction. Further, one is, object use is must, secondly, message passing and lastly, Dynamic binding.",
  },
  {
    id: 50,
    Question:
      "The feature by which one object can interact with another object is _____________",
    Options: [
      "a) Data transfer",
      "b) Data Binding",
      "c) Message Passing",
      "d) Message reading",
    ],
    Answer:
      "Answer: c\nExplanation: The interaction between two object is called the message passing feature. Data transfer is not a feature of OOP. Also, message reading is not a feature of OOP.",
  },
  {
    id: 51,
    Question: "___________ underlines the feature of Polymorphism in a class.",
    Options: [
      "a) Nested class",
      "b) Enclosing class",
      "c) Inline function",
      "d) Virtual Function",
    ],
    Answer:
      "Answer: d\nExplanation: Virtual Functions can be defined in any class using the keyword virtual. All the classes which inherit the class containing the virtual function, define the virtual function as required. Redefining the function on all the derived classes according to class and use represents polymorphism.",
  },
  {
    id: 52,
    Question:
      "Which feature in OOP is used to allocate additional function to a predefined operator in any language?",
    Options: [
      "a) Operator Overloading",
      "b) Function Overloading",
      "c) Operator Overriding",
      "d) Function Overriding",
    ],
    Answer:
      "Answer: a\nExplanation: The feature is operator overloading. There is not a feature named operator overriding specifically. Function overloading and overriding doesn’t give addition function to any operator.",
  },
  {
    id: 53,
    Question: "Which among doesn’t illustrates polymorphism?",
    Options: [
      "a) Function overloading",
      "b) Function overriding",
      "c) Operator overloading",
      "d) Virtual function",
    ],
    Answer:
      "Answer: b\nExplanation: Function overriding doesn’t illustrate polymorphism because the functions are actually different and theirs scopes are different. Function and operator overloading illustrate proper polymorphism. Virtual functions show polymorphism because all the classes which inherit virtual function, define the same function in different ways.",
  },
  {
    id: 54,
    Question: "Which among the following, for a pure OOP language, is true?",
    Options: [
      "a) The language should follow 3 or more features of OOP",
      "b) The language should follow at least 1 feature of OOP",
      "c) The language must follow only 3 features of OOP",
      "d) The language must follow all the rules of OOP",
    ],
    Answer:
      "Answer: a\nExplanation: Exception handling is a feature of OOP as it includes classes concept in most of the cases. Also it may come handy while using inheritance.",
  },
  {
    id: 55,
    Question: "Does OOP provide better security than POP?",
    Options: [
      "a) Always true for any programming language",
      "b) May not be true with respect to all programming languages",
      "c) It depends on type of program",
      "d) It’s vice-versa is true",
    ],
    Answer:
      "Answer: d\nExplanation: The language must follow all the rules of OOP to be called a purely OOP language. Even if a single OOP feature is not followed, then it’s known to be a partially OOP language.",
  },
  {
    id: 56,
    Question: "Which among the following best describes polymorphism?",
    Options: [
      "a) It is the ability for a message/data to be processed in more than one form",
      "b) It is the ability for a message/data to be processed in only 1 form",
      "c) It is the ability for many messages/data to be processed in one way",
      "d) It is the ability for undefined message/data to be processed in at least one way",
    ],
    Answer:
      "Answer: a\nExplanation: It is actually the ability for a message / data to be processed in more than one form. The word polymorphism indicates many-forms. So if a single entity takes more than one form, it is known as polymorphism.",
  },
  {
    id: 57,
    Question:
      "What do you call the languages that support classes but not polymorphism?",
    Options: [
      "a) Class based language",
      "b) Procedure Oriented language",
      "c) Object-based language",
      "d) If classes are supported, polymorphism will always be supported",
    ],
    Answer:
      "Answer: c\nExplanation: The languages which support classes but doesn’t support polymorphism, are known as object-based languages. Polymorphism is such an important feature, that is a language doesn’t support this feature, it can’t be called as a OOP language.",
  },
  {
    id: 58,
    Question:
      "Which among the following is the language which supports classes but not polymorphism?",
    Options: ["a) SmallTalk", "b) Java", "c) C++", "d) Ada"],
    Answer:
      "Answer: d\nExplanation: Ada is the language which supports the concept of classes but doesn’t support the polymorphism feature. It is an object-based programming language. Note that it’s not an OOP language.",
  },
  {
    id: 59,
    Question:
      "If same message is passed to objects of several different classes and all of those can respond in a different way, what is this feature called?",
    Options: [
      "a) Inheritance",
      "b) Overloading",
      "c) Polymorphism",
      "d) Overriding",
    ],
    Answer:
      "Answer: c\nExplanation: The feature defined in question defines polymorphism features. Here the different objects are capable of responding to the same message in different ways, hence polymorphism.",
  },
  {
    id: 60,
    Question:
      '5. Which class/set of classes can illustrate polymorphism in the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">abstract <span class="kw2">class</span> student\n<span class="br0">{</span>\n   <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span>\n   calc_grade<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span>\n<span class="kw2">class</span> topper<span class="sy4">:</span><span class="kw2">public</span> student\n<span class="br0">{</span>\n    <span class="kw2">public</span> <span class="sy4">:</span> calc_grade<span class="br0">(</span><span class="br0">)</span>\n    <span class="br0">{</span> \n        <span class="kw1">return</span> <span class="nu0">10</span><span class="sy4">;</span> \n    <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> average<span class="sy4">:</span><span class="kw2">public</span> student\n<span class="br0">{</span> \n     <span class="kw2">public</span> <span class="sy4">:</span> calc_grade<span class="br0">(</span><span class="br0">)</span>\n     <span class="br0">{</span>\n         <span class="kw1">return</span> <span class="nu0">20</span><span class="sy4">;</span> \n     <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> failed<span class="br0">{</span> <span class="kw4">int</span> marks<span class="sy4">;</span> <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Only class student can show polymorphism",
      "b) Only class student and topper together can show polymorphism",
      "c) All class student, topper and average together can show polymorphism",
      "d) Class failed should also inherit class student for this code to work for polymorphism",
    ],
    Answer:
      "Answer: c\nExplanation: Since Student class is abstract class and class topper and average are inheriting student, class topper and average must define the function named calc_grade(); in abstract class. Since both the definition are different in those classes, calc_grade() will work in different way for same input from different objects. Hence it shows polymorphism.",
  },
  {
    id: 61,
    Question: "Which type of function among the following shows polymorphism?",
    Options: [
      "a) Inline function",
      "b) Virtual function",
      "c) Undefined functions",
      "d) Class member functions",
    ],
    Answer:
      "Answer: b\nExplanation: Only virtual functions among these can show polymorphism. Class member functions can show polymorphism too but we should be sure that the same function is being overloaded or is a function of abstract class or something like this, since we are not sure about all these, we can’t say whether it can show polymorphism or not.",
  },
  {
    id: 62,
    Question:
      "In case of using abstract class or function overloading, which function is supposed to be called first?",
    Options: [
      "a) Local function",
      "b) Function with highest priority in compiler",
      "c) Global function",
      "d) Function with lowest priority because it might have been halted since long time, because of low priority",
    ],
    Answer:
      "Answer: b\nExplanation: Function with highest priority is called. Here, it’s not about the thread scheduling in CPU, but it focuses on whether the function in local scope is present or not, or if scope resolution is used in some way, or if the function matches the argument signature. So all these things define which function has the highest priority to be called in runtime. Local function could be one of the answer but we can’t say if someone have used pointer to another function or same function name.",
  },
  {
    id: 63,
    Question: "Which among the following can’t be used for polymorphism?",
    Options: [
      "a) Static member functions",
      "b) Member functions overloading",
      "c) Predefined operator overloading",
      "d) Constructor overloading",
    ],
    Answer:
      "Answer: a\nExplanation: Static member functions are not property of any object. Hence it can’t be considered for overloading/overriding. For polymorphism, function must be property of object, not only of class.",
  },
  {
    id: 64,
    Question:
      '9. What is output of the following program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span> \n    <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span> \n\t<span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span> \n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”its base <span class="kw2">class</span>”\n\t<span class="br0">}</span><span class="sy4">;</span>\n\t<span class="kw2">class</span> topper<span class="sy4">:</span><span class="kw2">public</span> student\n\t<span class="br0">{</span>\n\t\t<span class="kw2">public</span> <span class="sy4">:</span> \n\t\t<span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t\t<span class="br0">{</span> \n\t\t\t<span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”Its derived <span class="kw2">class</span>”<span class="sy4">;</span> \n\t\t<span class="br0">}</span>\n\t<span class="br0">}</span>\n\t<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span> <span class="br0">{</span> student s<span class="sy4">;</span> topper t<span class="sy4">;</span>\n\ts.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n\tt.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Its base classIts derived class",
      "b) Its base class Its derived class",
      "c) Its derived classIts base class",
      "d) Its derived class Its base class",
    ],
    Answer:
      "Answer: a\nExplanation: You need to focus on how the output is going to be shown, no space will be given after first message from base class. And then the message from derived class will be printed. Function disp() in base class overrides the function of base class being derived.",
  },
  {
    id: 65,
    Question: "Which among the following can show polymorphism?",
    Options: [
      "a) Overloading ||",
      "b) Overloading +=",
      "c) Overloading <<",
      "d) Overloading &&",
    ],
    Answer:
      "Answer: c\nExplanation: Only insertion operator can be overloaded among all the given options. And the polymorphism can be illustrated here only if any of these is applicable of being overloaded. Overloading is type of polymorphism.",
  },
  {
    id: 66,
    Question:
      '11. Find the output of the following program.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> education\n<span class="br0">{</span> \n\t<span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">10</span><span class="br0">]</span><span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”Its education <span class="kw3">system</span>”<span class="sy4">;</span>\n\t<span class="br0">}</span>\n\t<span class="kw2">class</span> school<span class="sy4">:</span><span class="kw2">public</span> education\n\t<span class="br0">{</span>\n\t\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">void</span> dsip<span class="br0">(</span><span class="br0">)</span>\n\t\t<span class="br0">{</span> \n\t\t\t<span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”Its school education <span class="kw3">system</span>”<span class="sy4">;</span>\n\t\t<span class="br0">}</span>\n    <span class="br0">}</span><span class="sy4">;</span>\n\t<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>\n                school s<span class="sy4">;</span>\n                s.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Its school education system",
      "b) Its education system",
      "c) Its school education systemIts education system",
      "d) Its education systemIts school education system",
    ],
    Answer:
      "Answer: a\nExplanation: Notice that the function name in derived class is different from the function name in base class. Hence when we call the disp() function, base class function is executed. No polymorphism is used here.",
  },
  {
    id: 67,
    Question:
      "Which problem may arise if we use abstract class functions for polymorphism?",
    Options: [
      "a) All classes are converted as abstract class",
      "b) Derived class must be of abstract type",
      "c) All the derived classes must implement the undefined functions",
      "d) Derived classes can’t redefine the function",
    ],
    Answer:
      "Answer: a\nExplanation: It is possible to implement polymorphism in C language, even though it doesn’t support class. We can use structures and then declare pointers which in turn points to some function. In this way we simulate the functions like member functions but not exactly member function. Now we can overload these functions, hence implementing polymorphism in C language.",
  },
  {
    id: 68,
    Question: "Which among the following is not true for polymorphism?",
    Options: [
      "a) It is feature of OOP",
      "b) Ease in readability of program",
      "c) Helps in redefining the same functionality",
      "d) Increases overhead of function definition always",
    ],
    Answer:
      "Answer: c\nExplanation: The undefined functions must be defined is a problem, because one may need to implement few undefined functions from abstract class, but he will have to define each of the functions declared in abstract class. Being useless task, it is a problem sometimes.",
  },
  {
    id: 69,
    Question:
      "If 2 classes derive one base class and redefine a function of base class, also overload some operators inside class body. Among these two things of function and operator overloading, where is polymorphism used?",
    Options: [
      "a) Function overloading only",
      "b) Operator overloading only",
      "c) Both of these are using polymorphism",
      "d) Either function overloading or operator overloading because polymorphism can be applied only once in a program",
    ],
    Answer:
      "Answer: d\nExplanation: It never increases function definition overhead, one way or another if you don’t use polymorphism, you will use the definition in some other way, so it actually helps to write efficient codes.",
  },
  {
    id: 70,
    Question: "Which among the following best describes encapsulation?",
    Options: [
      "a) It is a way of combining various data members into a single unit",
      "b) It is a way of combining various member functions into a single unit",
      "c) It is a way of combining various data members and member functions into a single unit which can operate on any data",
      "d) It is a way of combining various data members and member functions that operate on those data members into a single unit",
    ],
    Answer:
      "Answer: d\nExplanation: It is a way of combining both data members and member functions, which operate on those data members, into a single unit. We call it a class in OOP generally. This feature have helped us modify the structures used in C language to be upgraded into class in C++ and other languages.",
  },
  {
    id: 71,
    Question:
      "If data members are private, what can we do to access them from the class object?",
    Options: [
      "a) Create public member functions to access those data members",
      "b) Create private member functions to access those data members",
      "c) Create protected member functions to access those data members",
      "d) Private data members can never be accessed from outside the class",
    ],
    Answer:
      "Answer: a\nExplanation: We can define public member functions to access those private data members and get their value for use or alteration. They can’t be accessed directly but is possible to be access using member functions. This is done to ensure that the private data doesn’t get modified accidentally.",
  },
  {
    id: 72,
    Question:
      "While using encapsulation, which among the following is possible?",
    Options: [
      "a) Code modification can be additional overhead",
      "b) Data member’s data type can be changed without changing any other code",
      "c) Data member’s type can’t be changed, or whole code have to be changed",
      "d) Member functions can be used to change the data type of data members",
    ],
    Answer:
      "Answer: b\nExplanation: Data member’s data type can be changed without changing any further code. All the members using that data can continue in the same way without any modification. Member functions can never change the data type of same class data members.",
  },
  {
    id: 73,
    Question: "Which feature can be implemented using encapsulation?",
    Options: [
      "a) Inheritance",
      "b) Abstraction",
      "c) Polymorphism",
      "d) Overloading",
    ],
    Answer:
      "Answer: b\nExplanation: Data abstraction can be achieved by using encapsulation. We can hide the operation and structure of actual program from the user and can show only required information by the user.",
  },
  {
    id: 74,
    Question: "Find which of the following uses encapsulation?",
    Options: [
      "a) void main(){  int a;  void fun( int a=10;  cout<<a); fun(); }",
      "b) class student{ int a;   public: int b;};",
      "c) class student{int a; public: void disp(){ cout<<a;} };",
      "d) struct topper{ char name[10]; public : int marks; }",
    ],
    Answer:
      "Answer: c\nExplanation: It is the class which uses both the data members and member functions being declared inside a single unit. Only data members can be there in structures also. And the encapsulation can only be illustrated if some data/operations are associated within class.",
  },
  {
    id: 75,
    Question: "Encapsulation helps in writing ___________ classes in java.",
    Options: ["a) Mutable", "b) Abstract", "c) Wrapper", "d) Immutable"],
    Answer:
      "Answer: d\nExplanation: Immutable classes are used for caching purpose generally. And it can be created by making the class as final and making all its members private.",
  },
  {
    id: 76,
    Question: "Which among the following should be encapsulated?",
    Options: [
      "a) The data which is prone to change is near future",
      "b) The data prone to change in long terms",
      "c) The data which is intended to be changed",
      "d) The data which belongs to some other class",
    ],
    Answer:
      "Answer: a\nExplanation: The data prone to change in near future is usually encapsulated so that it doesn’t get changed accidentally. We encapsulate the data to hide the critical working of program from outside world.",
  },
  {
    id: 77,
    Question: "How can Encapsulation be achieved?",
    Options: [
      "a) Using Access Specifiers",
      "b) Using only private members",
      "c) Using inheritance",
      "d) Using Abstraction",
    ],
    Answer:
      "Answer: a\nExplanation: Using access specifiers we can achieve encapsulation. Using this we can in turn implement data abstraction. It’s not necessary that we only use private access.",
  },
  {
    id: 78,
    Question:
      "Which among the following violates the principle of encapsulation almost always?",
    Options: [
      "a) Local variables",
      "b) Global variables",
      "c) Public variables",
      "d) Array variables",
    ],
    Answer:
      "Answer: b\nExplanation: Global variables almost always violates the principles of encapsulation. Encapsulation says the data should be accessed only by required set of elements. But global variable is accessible everywhere, also it is most prone to changes. It doesn’t hide the internal working of program.",
  },
  {
    id: 79,
    Question:
      "Which among the following would destroy the encapsulation mechanism if it was allowed in programming?",
    Options: [
      "a) Using access declaration for private members of base class",
      "b) Using access declaration for public members of base class",
      "c) Using access declaration for local variable of main() function",
      "d) Using access declaration for global variables",
    ],
    Answer:
      "Answer: a\nExplanation: If using access declaration for private members of base class was allowed in programming, it would have destroyed whole concept of encapsulation. As if it was possible, any class which gets inherited privately, would have been able to inherit the private members of base class, and hence could access each and every member of base class.",
  },
  {
    id: 80,
    Question:
      "Which among the following can be a concept against encapsulation rules?",
    Options: [
      "a) Using function pointers",
      "b) Using char* string pointer to be passed to non-member function",
      "c) Using object array",
      "d) Using any kind of pointer/array address in passing to another function",
    ],
    Answer:
      "Answer: d\nExplanation: If we use any kind of array or pointer as data member which should not be changed, but in some case its address is passed to some other function or similar variable. There are chances to modify its whole data easily. Hence Against encapsulation.",
  },
  {
    id: 81,
    Question:
      '12. Consider the following code and select the correct option.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span>  \n     <span class="kw4">int</span> marks<span class="sy4">;</span>\n     <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">int</span><span class="sy2">*</span> fun<span class="br0">(</span><span class="br0">)</span>\n     <span class="br0">{</span> \n          <span class="kw1">return</span> <span class="sy3">&amp;</span>marks<span class="sy4">;</span> \n     <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nmain<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n    student s<span class="sy4">;</span>\n    <span class="kw4">int</span> <span class="sy2">*</span>ptr<span class="sy1">=</span>c.<span class="me1">fun</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n    <span class="kw1">return</span> <span class="nu0">0</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) This code is good to go",
      "b) This code may result in undesirable conditions",
      "c) This code will generate error",
      "d) This code violates encapsulation",
    ],
    Answer:
      "Answer: d\nExplanation: This code violates the encapsulation. By this code we can get the address of the private member of the class, hence we can change the value of private member, which is against the rules.",
  },
  {
    id: 82,
    Question:
      '13. Consider the code and select the wrong choice.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> hero\n<span class="br0">{</span> \n     <span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">10</span><span class="br0">]</span><span class="sy4">;</span>\n     <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n     <span class="br0">{</span> \n          <span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>name<span class="sy4">;</span>\n     <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) This maintains encapsulation",
      "b) This code doesn’t maintain encapsulation",
      "c) This code is vulnerable",
      "d) This code gives error",
    ],
    Answer:
      "Answer: a\nExplanation: This code maintains encapsulation. Here the private member is kept private. Outside code can’t access the private members of class. Only objects of this class will be able to access the public member function at maximum.",
  },
  {
    id: 83,
    Question: "Using encapsulation data security is ___________",
    Options: [
      "a) Not ensured",
      "b) Ensured to some extent",
      "c) Purely ensured",
      "d) Very low",
    ],
    Answer:
      "Answer: b\nExplanation: False, because we can’t call these structures if member functions are involved, it must be called class. Also, it is not just about adding functions, it’s about binding data and functions together.",
  },
  {
    id: 84,
    Question: "Which among the following best defines abstraction?",
    Options: [
      "a) Hiding the implementation",
      "b) Showing the important data",
      "c) Hiding the important data",
      "d) Hiding the implementation and showing only the features",
    ],
    Answer:
      "Answer: d\nExplanation: It includes hiding the implementation part and showing only the required data and features to the user. It is done to hide the implementation complexity and details from the user. And to provide a good interface in programming.",
  },
  {
    id: 85,
    Question: "Hiding the implementation complexity can ____________",
    Options: [
      "a) Make the programming easy",
      "b) Make the programming complex",
      "c) Provide more number of features",
      "d) Provide better features",
    ],
    Answer:
      "Answer: a\nExplanation: It can make programming easy. The programming need not know how the inbuilt functions are working but can use those complex functions directly in the program. It doesn’t provide more number of features or better features.",
  },
  {
    id: 86,
    Question: "Class is _________ abstraction.",
    Options: ["a) Object", "b) Logical", "c) Real", "d) Hypothetical"],
    Answer:
      "Answer: b\nExplanation: Class is logical abstraction because it provides a logical structure for all of its objects. It gives an overview of the features of an object.",
  },
  {
    id: 87,
    Question: "Object is ________ abstraction.",
    Options: ["a) Object", "b) Logical", "c) Real", "d) Hypothetical"],
    Answer:
      "Answer: c\nExplanation: Object is real abstraction because it actually contains those features of class. It is the implementation of overview given by class. Hence the class is logical abstraction and its object is real.",
  },
  {
    id: 88,
    Question: "Abstraction gives higher degree of ________",
    Options: [
      "a) Class usage",
      "b) Program complexity",
      "c) Idealized interface",
      "d) Unstable interface",
    ],
    Answer:
      "Answer: c\nExplanation: It is to idealize the interface. In this way the programmer can use the programming features more efficiently and can code better. It can’t increase the program complexity, as the feature itself is made to hide it.",
  },
  {
    id: 89,
    Question: "Abstraction can apply to ____________",
    Options: [
      "a) Control and data",
      "b) Only data",
      "c) Only control",
      "d) Classes",
    ],
    Answer:
      "Answer: a\nExplanation: Abstraction applies to both. Control abstraction involves use of subroutines and control flow abstraction. Data abstraction involves handling pieces of data in meaningful ways.",
  },
  {
    id: 90,
    Question:
      "Which among the following can be viewed as combination of abstraction of data and code.",
    Options: ["a) Class", "b) Object", "c) Inheritance", "d) Interfaces"],
    Answer:
      "Answer: b\nExplanation: Object can be viewed as abstraction of data and code. It uses data members and their functioning as data abstraction. Code abstraction as use of object of inbuilt class.",
  },
  {
    id: 91,
    Question: "Abstraction principle includes___________",
    Options: [
      "a) Use abstraction at its minimum",
      "b) Use abstraction to avoid longer codes",
      "c) Use abstraction whenever possible to avoid duplication",
      "d) Use abstraction whenever possible to achieve OOP",
    ],
    Answer:
      "Answer: c\nExplanation: Abstraction principle includes use of abstraction to avoid duplication (usually of code). It this way the program doesn’t contain any redundant functions and make the program efficient.",
  },
  {
    id: 92,
    Question: "Encapsulation and abstraction differ as ____________",
    Options: [
      "a) Binding and Hiding respectively",
      "b) Hiding and Binding respectively",
      "c) Can be used any way",
      "d) Hiding and hiding respectively",
    ],
    Answer:
      "Answer: b\nExplanation: Higher the level of abstraction, lower are the details. The best way to understand this is to consider a whole system that is highest level of abstraction as it hides everything inside. And next lower level would contain few of the computer components and so on.",
  },
  {
    id: 93,
    Question: "In terms of stream and files ____________",
    Options: [
      "a) Abstraction is called a stream and device is called a file",
      "b) Abstraction is called a file and device is called a stream",
      "c) Abstraction can be called both file and stream",
      "d) Abstraction can’t be defined in terms of files and stream",
    ],
    Answer:
      "Answer: a\nExplanation: Abstraction is hiding the complex code. For example, we directly use cout object in C++ but we don’t know how is it actually implemented. Encapsulation is data binding, as in, we try to combine a similar type of data and functions together.",
  },
  {
    id: 94,
    Question:
      "If two classes combine some private data members and provides public member functions to access and manipulate those data members. Where is abstraction used?",
    Options: [
      "a) Using private access specifier for data members",
      "b) Using class concept with both data members and member functions",
      "c) Using public member functions to access and manipulate the data members",
      "d) Data is not sufficient to decide what is being used",
    ],
    Answer:
      "Answer: a\nExplanation: Abstraction is called stream to provide a level of complexity hiding, for how the files operations are actually done. Actual devices are called file because in one way or another, those can be considered as single entity and there is nothing hidden.",
  },
  {
    id: 95,
    Question:
      "A phone is made up of many components like motherboard, camera, sensors and etc. If the processor represents all the functioning of phone, display shows the display only, and the phone is represented as a whole. Which among the following have highest level of abstraction?",
    Options: ["a) Motherboard", "b) Display", "c) Camera", "d) Phone"],
    Answer:
      "Answer: c\nExplanation: It is the concept of hiding program complexity and actual working in background. Hence use of public member functions illustrates abstraction here.",
  },
  {
    id: 96,
    Question: "Which among the following is not a level of abstraction?",
    Options: [
      "a) Logical level",
      "b) Physical level",
      "c) View level",
      "d) External level",
    ],
    Answer:
      "Answer: d\nExplanation: Phone as a whole have the highest level of abstraction. This is because the phone being a single unit represents the whole system. Whereas motherboard, display and camera are its components.",
  },
  {
    id: 97,
    Question: "Using higher degree of abstraction __________",
    Options: [
      "a) May get unsafe",
      "b) May reduce readability",
      "c) Can be safer",
      "d) Can increase vulnerability",
    ],
    Answer:
      "Answer: d\nExplanation: Abstraction is generally divided into 3 different levels, namely, logical, physical and view level. External level is not defined in terms of abstraction.",
  },
  {
    id: 98,
    Question:
      "Which among the following is called first, automatically, whenever an object is created?",
    Options: ["a) Class", "b) Constructor", "c) New", "d) Trigger"],
    Answer:
      "Answer: b\nExplanation: Constructors are the member functions which are called automatically whenever an object is created. It is a mandatory functions to be called for an object to be created as this helps in initializing the object to a legal initial value for the class.",
  },
  {
    id: 99,
    Question:
      "Which among the following is not a necessary condition for constructors?",
    Options: [
      "a) Its name must be same as that of class",
      "b) It must not have any return type",
      "c) It must contain a definition body",
      "d) It can contains arguments",
    ],
    Answer:
      "Answer: c\nExplanation: Constructors are predefined implicitly, even if the programmer doesn’t define any of them. Even if the programmer declares a constructor, it’s not necessary that it must contain some definition.",
  },
  {
    id: 100,
    Question: "Which among the following is correct?",
    Options: [
      "a) class student{ public: int student(){} };",
      "b) class student{ public: void student (){} };",
      "c) class student{ public: student{}{}  };",
      "d) class student{ public: student(){} };",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors must not have any return type. Also, the body may or may not contain any body. Defining default constructor is optional, if you are not using any other constructor.",
  },
  {
    id: 101,
    Question:
      "In which access should a constructor be defined, so that object of the class can be created in any function?",
    Options: [
      "a) Public",
      "b) Protected",
      "c) Private",
      "d) Any access specifier will work",
    ],
    Answer:
      "Answer: a\nExplanation: Constructor function should be available to all the parts of program where the object is to be created. Hence it is advised to define it in public access, so that any other function is able to create objects.",
  },
  {
    id: 102,
    Question:
      "How many types of constructors are available for use in general (with respect to parameters)?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: a\nExplanation: Two types of constructors are defined generally, namely, default constructor and parameterized constructor. Default constructor is not necessary to be defined always.",
  },
  {
    id: 103,
    Question:
      "If class C inherits class B. And B has inherited class A. Then while creating the object of class C, what will be the sequence of constructors getting called?",
    Options: [
      "a) Constructor of C then B, finally of A",
      "b) Constructor of A then C, finally of B",
      "c) Constructor of C then A, finally B",
      "d) Constructor of A then B, finally C",
    ],
    Answer:
      "Answer: b\nExplanation: It will create the object without any problem, because the default arguments use the default value if no value is passed. Hence it is equal to default constructor with zero parameters. But it will not create the object if signature doesn’t match.",
  },
  {
    id: 104,
    Question:
      '9. In multiple inheritance, if class C inherits two classes A and B as follows, which class constructor will be called first?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A<span class="br0">{</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="br0">{</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span> <span class="kw2">public</span> A, <span class="kw2">public</span> B<span class="br0">{</span>  <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) A()", "b) B()", "c) C()", "d) Can’t be determined"],
    Answer:
      "Answer: a\nExplanation: If the object is create without arguments and only parameterized constructors are used, compiler will give an error as there is no default constructor defined. And some constructor must be called so as to create an object in memory.",
  },
  {
    id: 105,
    Question: "Which among the following is true for copy constructor?",
    Options: [
      "a) The argument object is passed by reference",
      "b) It can be defined with zero arguments",
      "c) Used when an object is passed by value to a function",
      "d) Used when a function returns an object",
    ],
    Answer:
      "Answer: d\nExplanation: While creating the object of class C, its constructor would be called by default. But, if the class is inheriting some other class, firstly the parent class constructor will be called so that all the data is initialized that is being inherited.",
  },
  {
    id: 106,
    Question: "If the object is passed by value to a copy constructor?",
    Options: [
      "a) Only public members will be accessible to be copied",
      "b) That will work normally",
      "c) Compiler will give out of memory error",
      "d) Data stored in data members won’t be accessible",
    ],
    Answer:
      "Answer: a\nExplanation: Constructor of class A will be called first. This is because the constructors in multiple inheritance are called in the sequence in which they are written to be inherited. Here A is written first, hence it is called first.",
  },
  {
    id: 107,
    Question:
      '12. Which object will be created first?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student \n<span class="br0">{</span>  \n    <span class="kw4">int</span> marks<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\nstudent s1, s2, s3<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) s1 then s2 then s3",
      "b) s3 then s2 then s1",
      "c) s2 then s3 then s1",
      "d) all are created at same time",
    ],
    Answer:
      "Answer: b\nExplanation: It can’t be defined with zero number of arguments. This is because to copy one object to another, the object must be mentioned so that compiler can take values from that object.",
  },
  {
    id: 108,
    Question: "Which among the following helps to create a temporary instance?",
    Options: [
      "a) Implicit call to a default constructor",
      "b) Explicit call to a copy constructor",
      "c) Implicit call to a parameterized constructor",
      "d) Explicit call to a constructor",
    ],
    Answer:
      "Answer: c\nExplanation: Compiler runs out of memory. This is because while passing the argument by value, a constructor of the object will be called. That in turn called another object constructor for values, and this goes on. This is like a constructor call to itself, and this goes on infinite times, hence it must be passed by reference, so that the constructor is not called.",
  },
  {
    id: 109,
    Question:
      '14. Which among the following is correct for the class defined below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span>\n    <span class="kw4">int</span> marks<span class="sy4">;</span>\n    <span class="kw2">public</span><span class="sy4">:</span> student<span class="br0">(</span><span class="br0">)</span><span class="br0">{</span><span class="br0">}</span>\n    student<span class="br0">(</span><span class="kw4">int</span> x<span class="br0">)</span>\n    <span class="br0">{</span> \n         marks<span class="sy1">=</span>x<span class="sy4">;</span> \n    <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nmain<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n    student s1<span class="br0">(</span><span class="nu0">100</span><span class="br0">)</span><span class="sy4">;</span>\n    student s2<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n    student s3<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span>\n    <span class="kw1">return</span> <span class="nu0">0</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Object s3, syntax error",
      "b) Only object s1 and s2 will be created",
      "c) Program runs and all objects are created",
      "d) Program will give compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: The objects are created in the sequence of how they are written. This happens because the constructors are called in the sequence of how the objects are mentioned. This is done in sequence.",
  },
  {
    id: 110,
    Question:
      "For constructor overloading, each constructor must differ in ___________ and __________",
    Options: [
      "a) Number of arguments and type of arguments",
      "b) Number of arguments and return type",
      "c) Return type and type of arguments",
      "d) Return type and definition",
    ],
    Answer:
      "Answer: d\nExplanation: Explicit call to a constructor can let you create a temporary instance. This is because the temporary instances doesn’t have any name. Those are deleted from memory as soon as their reference is removed.",
  },
  {
    id: 111,
    Question:
      "How many types of constructors are available, in general, in any language?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: b\nExplanation: There are 3 types of constructors in general, namely, default constructors, parameterized constructors and copy constructors. Default one is called whenever an object is created without arguments.",
  },
  {
    id: 112,
    Question:
      '2. Choose the correct option for the following code.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span>\n    <span class="kw4">int</span> marks<span class="sy4">;</span>\n<span class="br0">}</span>\nstudent s1<span class="sy4">;</span>\nstudent s2<span class="sy1">=</span><span class="nu0">2</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Object s1 should be passed with argument",
      "b) Object s2 should not be declared",
      "c) Object s2 will not be created, but program runs",
      "d) Program gives compile time error",
    ],
    Answer:
      "Answer: d\nExplanation: The object s2 can be assigned with one value only if a single argument constructor is defined in class, but here, it can’t be done as no constructor is defined. Hence every object must be declare or created without using arguments.",
  },
  {
    id: 113,
    Question:
      "Which constructor is called while assigning some object with another?",
    Options: [
      "a) Default",
      "b) Parameterized",
      "c) Copy",
      "d) Direct assignment is used",
    ],
    Answer:
      "Answer: c\nExplanation: Copy constructor is used while an object is assigned with another. This is mandatory since we can’t decide which member should be assigned to which member value. By using copy constructor, we can assign the values in required form.",
  },
  {
    id: 114,
    Question:
      "It’s necessary to pass object by reference in copy constructor because ____________",
    Options: [
      "a) Constructor is not called in pass by reference",
      "b) Constructor is called in pass by reference only",
      "c) It passes the address of new constructor to be created",
      "d) It passes the address of new object to be created",
    ],
    Answer:
      "Answer: a\nExplanation: Object must be passed by reference to copy constructor because constructor is not called in pass by reference. Otherwise, in pass by value, a temporary object will be created which in turn will try to call its constructor that is already being used. This results in creating infinite number of objects and hence memory shortage error will be shown.",
  },
  {
    id: 115,
    Question: "Which specifier applies only to the constructors?",
    Options: ["a) Public", "b) Protected", "c) Implicit", "d) Explicit"],
    Answer:
      "Answer: d\nExplanation: The keyword explicit can be used while defining the constructor only. This is used to suppress the implicit call to the constructor. It ensures that the constructors are being called with the default syntax only (i.e. only by using object and constructor name).",
  },
  {
    id: 116,
    Question: "Which among the following is true?",
    Options: [
      "a) Default constructor can’t be defined by the programmer",
      "b) Default parameters constructor isn’t equivalent to the default constructor",
      "c) Default constructor can be called explicitly",
      "d) Default constructor is and always called implicitly only",
    ],
    Answer:
      "Answer: c\nExplanation: Default constructors can be called explicitly anytime. They are specifically used to allocate memory space for the object in memory, in general. It is not necessary that these should always be called implicitly.",
  },
  {
    id: 117,
    Question: "Which type of constructor can’t have a return type?",
    Options: [
      "a) Default",
      "b) Parameterized",
      "c) Copy",
      "d) Constructors don’t have a return type",
    ],
    Answer:
      "Answer: d\nExplanation: Constructors don’t return any value. Those are special functions, whose return type is not defined, not even void. This is so because the constructors are meant to initialize the members of class and not to perform some task which can return some value to newly created object.",
  },
  {
    id: 118,
    Question: "Why do we use static constructors?",
    Options: [
      "a) To initialize the static members of class",
      "b) To initialize all the members with static value",
      "c) To delete the static members when not required",
      "d) To clear all the static members initialized values",
    ],
    Answer:
      "Answer: a\nExplanation: Static constructors help in initializing the static members of the class. This is provided because the static members are not considered to be property of the object, rather they are considered as the property of class.",
  },
  {
    id: 119,
    Question: "When and how many times a static constructor is called?",
    Options: [
      "a) Created at time of object destruction",
      "b) Called at first time when an object is created and only one time",
      "c) Called at first time when an object is created and called with every new object creation",
      "d) Called whenever an object go out of scope",
    ],
    Answer:
      "Answer: b\nExplanation: Those are called at very first call of object creation. That is called only one time because the value of static members must be retained and continued from the time it gets created.",
  },
  {
    id: 120,
    Question: "Which among the following is true for static constructor?",
    Options: [
      "a) Static constructors are called with every new object",
      "b) Static constructors are used initialize data members to zero always",
      "c) Static constructors can’t be parameterized constructors",
      "d) Static constructors can be used to initialize the non-static members also",
    ],
    Answer:
      "Answer: c\nExplanation: Static constructors can’t be parameterized constructors. Those are used to initialize the value of static members only. And that must be a definite value. Accepting arguments may make it possible that static members loses their value with every new object being created.",
  },
  {
    id: 121,
    Question: "Default constructor initializes all data members as ___________",
    Options: [
      "a) All numeric member with some garbage values and string to random string",
      "b) All numeric member with some garbage values and string to null",
      "c) All numeric member with zero and strings to random value",
      "d) All numeric member with zero and strings to null",
    ],
    Answer:
      "Answer: a\nExplanation: Since the static constructors are can’t be parameterized, they can’t be overloaded. Having this case, only one constructor will be possible to be created in a local scope, because the signature will always be same and hence it will not be possible to overload static constructor.",
  },
  {
    id: 122,
    Question: "When is the static constructor called?",
    Options: [
      "a) After the first instance is created",
      "b) Before default constructor call of first instance",
      "c) Before first instance is created",
      "d) At time of creation of first instance",
    ],
    Answer:
      "Answer: d\nExplanation: Default constructor, which even the programmer doesn’t define, always initialize the values as zero if numeric and null if string. This is done so as to avoid the accidental values to change the conditional statements being used and similar conditions.",
  },
  {
    id: 123,
    Question:
      "If constructors of a class are defined in private access, then __________",
    Options: [
      "a) The class can’t be inherited",
      "b) The class can be inherited",
      "c) Instance can be created only in another class",
      "d) Instance can be created anywhere in the program",
    ],
    Answer:
      "Answer: c\nExplanation: The static constructor is called before creation of the first instance of that class. This is done so that even the first instance can use the static value of the static members of the class and manipulate as required.",
  },
  {
    id: 124,
    Question:
      '15. Which among the following is correct, based on the given code below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span> \n     <span class="kw4">int</span> marks<span class="sy4">;</span>\n     <span class="kw2">public</span> <span class="sy4">:</span> student<span class="br0">(</span><span class="br0">)</span>\n     <span class="br0">{</span>  \n          <span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”New student details can be added now”<span class="sy4">;</span>\n     <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nstudent s1<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Cout can’t be used inside the constructor",
      "b) Constructor must contain only initializations",
      "c) This program works fine",
      "d) This program produces errors",
    ],
    Answer:
      "Answer: a\nExplanation: If the constructors are defined in private access, then the class can’t be inherited by other classes. This is useful when the class contains static members only. The instances can never be created.",
  },
  {
    id: 125,
    Question: "Copy constructor is a constructor which ________________",
    Options: [
      "a) Creates an object by copying values from any other object of same class",
      "b) Creates an object by copying values from first object created for that class",
      "c) Creates an object by copying values from another object of another class",
      "d) Creates an object by initializing it with another previously created object of same class",
    ],
    Answer:
      "Answer: d\nExplanation: The object that has to be copied to new object must be previously created. The new object gets initialized with the same values as that of the object mentioned for being copied. The exact copy is made with values.",
  },
  {
    id: 126,
    Question: "The copy constructor can be used to ____________",
    Options: [
      "a) Initialize one object from another object of same type",
      "b) Initialize one object from another object of different type",
      "c) Initialize more than one object from another object of same type at a time",
      "d) Initialize all the objects of a class to another object of another class",
    ],
    Answer:
      "Answer: a\nExplanation: The copy constructor has the most basic function to initialize the members of an object with same values as that of some previously created object. The object must be of same class.",
  },
  {
    id: 127,
    Question:
      "If two classes have exactly same data members and member function and only they differ by class name. Can copy constructor be used to initialize one class object with another class object?",
    Options: [
      "a) Yes, possible",
      "b) Yes, because the members are same",
      "c) No, not possible",
      "d) No, but possible if constructor is also same",
    ],
    Answer:
      "Answer: c\nExplanation: The restriction for copy constructor is that it must be used with the object of same class. Even if the classes are exactly same the constructor won’t be able to access all the members of another class. Hence we can’t use object of another class for initialization.",
  },
  {
    id: 128,
    Question: "The copy constructors can be used to ________",
    Options: [
      "a) Copy an object so that it can be passed to a class",
      "b) Copy an object so that it can be passed to a function",
      "c) Copy an object so that it can be passed to another primitive type variable",
      "d) Copy an object for type casting",
    ],
    Answer:
      "Answer: b\nExplanation: When an object is passed to a function, actually its copy is made in the function. To copy the values, copy constructor is used. Hence the object being passed and object being used in function are different.",
  },
  {
    id: 129,
    Question: "Which returning an object, we can use ____________",
    Options: [
      "a) Default constructor",
      "b) Zero argument constructor",
      "c) Parameterized constructor",
      "d) Copy constructor",
    ],
    Answer:
      "Answer: d\nExplanation: While returning an object we can use the copy constructor. When we assign the return value to another object of same class then this copy constructor will be used. And all the members will be assigned the same values as that of the object being returned.",
  },
  {
    id: 130,
    Question:
      "If programmer doesn’t define any copy constructor then _____________",
    Options: [
      "a) Compiler provides an implicit copy constructor",
      "b) Compiler gives an error",
      "c) The objects can’t be assigned with another objects",
      "d) The program gives run time error if copying is used",
    ],
    Answer:
      "Answer: a\nExplanation: The compiler provides an implicit copy constructor. It is not mandatory to always create an explicit copy constructor. The values are copied using implicit constructor only.",
  },
  {
    id: 131,
    Question:
      "If a class implements some dynamic memory allocations and pointers then _____________",
    Options: [
      "a) Copy constructor must be defined",
      "b) Copy constructor must not be defined",
      "c) Copy constructor can’t be defined",
      "d) Copy constructor will not be used",
    ],
    Answer:
      "Answer: a\nExplanation: In the case where dynamic memory allocation is used, the copy constructor definition must be given. The implicit copy constructor is not capable of manipulating the dynamic memory and pointers. Explicit definition allows to manipulate the data as required.",
  },
  {
    id: 132,
    Question: "What is the syntax of copy constructor?",
    Options: [
      "a) classname (classname &obj){ /*constructor definition*/ }",
      "b) classname (cont classname obj){ /*constructor definition*/ }",
      "c) classname (cont classname &obj){ /*constructor definition*/ }",
      "d) classname (cont &obj){ /*constructor definition*/ }",
    ],
    Answer:
      "Answer: c\nExplanation: The syntax must contain the class name first, followed by the classname as type and &object within parenthesis. Then comes the constructor body. The definition can be given as per requirements.",
  },
  {
    id: 133,
    Question: "Object being passed to a copy constructor ___________",
    Options: [
      "a) Must be passed by reference",
      "b) Must be passed by value",
      "c) Must be passed with integer type",
      "d) Must not be mentioned in parameter list",
    ],
    Answer:
      "Answer: a\nExplanation: This is mandatory to pass the object by reference. Otherwise, the object will try to create another object to copy its values, in turn a constructor will be called, and this will keep on calling itself. This will cause the compiler to give out of memory error.",
  },
  {
    id: 134,
    Question:
      "Out of memory error is given when the object _____________ to the copy constructor.",
    Options: [
      "a) Is passed with & symbol",
      "b) Is passed by reference",
      "c) Is passed as <classname &obj>",
      "d) Is not passed by reference",
    ],
    Answer:
      "Answer: d\nExplanation: All the options given, directly or indirectly indicate that the object is being passed by reference. And if object is not passed by reference then the out of memory error is produced. Due to infinite constructor call of itself.",
  },
  {
    id: 135,
    Question:
      "Copy constructor will be called whenever the compiler __________",
    Options: [
      "a) Generates implicit code",
      "b) Generates member function calls",
      "c) Generates temporary object",
      "d) Generates object operations",
    ],
    Answer:
      "Answer: c\nExplanation: Whenever the compiler creates a temporary object, copy constructor is used to copy the values from existing object to the temporary object.",
  },
  {
    id: 136,
    Question: "The deep copy is possible only with the help of __________",
    Options: [
      "a) Implicit copy constructor",
      "b) User defined copy constructor",
      "c) Parameterized constructor",
      "d) Default constructor",
    ],
    Answer:
      "Answer: b\nExplanation: While using explicit copy constructor, the pointers of copied object point to the intended memory location. This is assured since the programmers themselves manipulate the addresses.",
  },
  {
    id: 137,
    Question: "Can a copy constructor be made private?",
    Options: [
      "a) Yes, always",
      "b) Yes, if no other constructor is defined",
      "c) No, never",
      "d) No, private members can’t be accessed",
    ],
    Answer:
      "Answer: a\nExplanation: The copy constructor can be defined as private. If we make it private then the objects of the class can’t be copied. It can be used when a class used dynamic memory allocation.",
  },
  {
    id: 138,
    Question: "The arguments to a copy constructor _____________",
    Options: [
      "a) Must be const",
      "b) Must not be cosnt",
      "c) Must be integer type",
      "d) Must be static",
    ],
    Answer:
      "Answer: a\nExplanation: The object should not be modified in the copy constructor. Because the object itself is being copied. When the object is returned from a function, the object must be a constant otherwise the compiler creates a temporary object which can die anytime.",
  },
  {
    id: 139,
    Question:
      "Which among the following best describes constructor overloading?",
    Options: [
      "a) Defining one constructor in each class of a program",
      "b) Defining more than one constructor in single class",
      "c) Defining more than one constructor in single class with different signature",
      "d) Defining destructor with each constructor",
    ],
    Answer:
      "Answer: c\nExplanation: If more than one constructors are defined in a class with same signature, then that results in error. The signatures must be different. So that the constructors can be differentiated.",
  },
  {
    id: 140,
    Question: "Can constructors be overloaded in derived class?",
    Options: [
      "a) Yes, always",
      "b) Yes, if derived class has no constructor",
      "c) No, programmer can’t do it",
      "d) No, never",
    ],
    Answer:
      "Answer: d\nExplanation: The constructor must be having the same name as that of a class. Hence a constructor of one class can’t even be defined in another class. Since the constructors can’t be defined in derived class, it can’t be overloaded too, in derived class.",
  },
  {
    id: 141,
    Question:
      "Does constructor overloading include different return types for constructors to be overloaded?",
    Options: [
      "a) Yes, if return types are different, signature becomes different",
      "b) Yes, because return types can differentiate two functions",
      "c) No, return type can’t differentiate two functions",
      "d) No, constructors doesn’t have any return type",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors doesn’t have any return type. When we can’t have return type of a constructor, overloading based on the return type is not possible. Hence only parameters can be different.",
  },
  {
    id: 142,
    Question:
      "Which among the following is possible way to overload constructor?",
    Options: [
      "a) Define default constructor, 1 parameter constructor and 2 parameter constructor",
      "b) Define default constructor, zero argument constructor and 1 parameter constructor",
      "c) Define default constructor, and 2 other parameterized constructors with same signature",
      "d) Define 2 default constructors",
    ],
    Answer:
      "Answer: a\nExplanation: All the constructors defined in a class must have a different signature in order to be overloaded. Here one default and other parameterized constructors are used, wherein one is of only one parameter and other accepts two. Hence overloading is possible.",
  },
  {
    id: 143,
    Question:
      '5. Which constructor will be called from the object created in the code below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span> \n\t<span class="kw4">int</span> i<span class="sy4">;</span>\n\tA<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\ti<span class="sy1">=</span><span class="nu0">0</span><span class="sy4">;</span> <span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>i<span class="sy4">;</span> \n\t<span class="br0">}</span>\n\tA<span class="br0">(</span><span class="kw4">int</span> x<span class="sy1">=</span><span class="nu0">0</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\ti<span class="sy1">=</span>x<span class="sy4">;</span>  <span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>I<span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nA obj1<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Default constructor",
      "b) Parameterized constructor",
      "c) Compile time error",
      "d) Run time error",
    ],
    Answer:
      "Answer: c\nExplanation: When a default constructor is defined and another constructor with 1 default value argument is defined, creating object without parameter will create ambiguity for the compiler. The compiler won’t be able to decide which constructor should be called, hence compile time error.",
  },
  {
    id: 144,
    Question: "Which among the following is false for a constructor?",
    Options: [
      "a) Constructors doesn’t have a return value",
      "b) Constructors are always user defined",
      "c) Constructors are overloaded with different signature",
      "d) Constructors may or may not have any arguments being accepted",
    ],
    Answer:
      "Answer: b\nExplanation: The constructors are not always user defined. The construct will be provided implicitly from the compiler if the used doesn’t defined any constructor. The implicit constructor makes all the string values null and allocates memory space for each data member.",
  },
  {
    id: 145,
    Question: "When is the constructor called for an object?",
    Options: [
      "a) As soon as overloading is required",
      "b) As soon as class is derived",
      "c) As soon as class is created",
      "d) As soon as object is created",
    ],
    Answer:
      "Answer: d\nExplanation: The constructor is called as soon as the object is created. The overloading comes into picture as to identify which constructor have to be called depending on arguments passed in the creation of object.",
  },
  {
    id: 146,
    Question:
      "Which among the following function can be used to call default constructor implicitly in java?",
    Options: ["a) this()", "b) that()", "c) super()", "d) sub()"],
    Answer:
      "Answer: a\nExplanation: The function this() can be used to call the default constructor from inside any other constructor. This helps to further reuse the code and not to write the redundant data in all the constructors.",
  },
  {
    id: 147,
    Question: "Why do we use constructor overloading?",
    Options: [
      "a) To use different types of constructors",
      "b) Because it’s a feature provided",
      "c) To initialize the object in different ways",
      "d) To differentiate one constructor from another",
    ],
    Answer:
      "Answer: c\nExplanation: The constructors are overloaded to initialize the objects of a class in different ways. This allows us to initialize the object with either default values or used given values. If data members are not initialized then program may give unexpected results.",
  },
  {
    id: 148,
    Question:
      "If programmer have defined parameterized constructor only, then __________________",
    Options: [
      "a) Default constructor will not be created by the compiler implicitly",
      "b) Default constructor will be created by the compiler implicitly",
      "c) Default constructor will not be created but called at runtime",
      "d) Compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: When the programmer doesn’t specify any default constructor and only defines some parameterized constructor. The compiler doesn’t provide any default constructor implicitly. This is because it is assumed that the programmer will create the objects only with constructors.",
  },
  {
    id: 149,
    Question: "Which among the following is not valid in java?",
    Options: [
      "a) Constructor overloading",
      "b) Recursive constructor call",
      "c) Default value constructors",
      "d) String argument constructor",
    ],
    Answer:
      "Answer: b\nExplanation: Java doesn’t provide the feature to recursively call the constructor. This is to eliminate the out of memory error in some cases that arises unexpectedly. That is an predefined condition for constructors in java.",
  },
  {
    id: 150,
    Question:
      '12. Which constructor will be called from the object obj2 in the following program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> i<span class="sy4">;</span>\n\tA<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t\ti<span class="sy1">=</span><span class="nu0">0</span><span class="sy4">;</span>  \n\t<span class="br0">}</span>\n\tA<span class="br0">(</span><span class="kw4">int</span> x<span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t\ti<span class="sy1">=</span>x<span class="sy2">+</span><span class="nu0">1</span><span class="sy4">;</span>  \n\t<span class="br0">}</span>\n\tA<span class="br0">(</span><span class="kw4">int</span> y, <span class="kw4">int</span> x<span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t\ti<span class="sy1">=</span>x<span class="sy2">+</span>y<span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nA obj1<span class="br0">(</span><span class="nu0">10</span><span class="br0">)</span><span class="sy4">;</span>\nA obj2<span class="br0">(</span><span class="nu0">10</span>,<span class="nu0">20</span><span class="br0">)</span><span class="sy4">;</span>\nA obj3<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) A(int x)",
      "b) A(int y)",
      "c) A(int y, int x)",
      "d) A(int y; int x)",
    ],
    Answer:
      "Answer: c\nExplanation: The two argument constructor will be called as we are passing 2 arguments to the object while creation. The arguments will be passed together and hence compiler resolves that two argument constructor have to be called.",
  },
  {
    id: 151,
    Question:
      "What are we only create an object but don’t call any constructor for it in java?",
    Options: [
      "a) Implicit constructor will be called",
      "b) Object is initialized to some null values",
      "c) Object is not created",
      "d) Object is created but points to null",
    ],
    Answer:
      "Answer: d\nExplanation: The object becomes a reference object which can be initialized will another object. Then this object will indirectly become another name of the object being assigned. If not assigned, it simply points to null address.",
  },
  {
    id: 152,
    Question: "Which among the following is false?",
    Options: [
      "a) Constructor can’t be overloaded in Kotlin",
      "b) Constructors can’t be called recursively in java",
      "c) Constructors can be overloaded in C++",
      "d) Constructors overloading depends on different signatures",
    ],
    Answer:
      "Answer: a\nExplanation: Kotlin language allows constructor overloading. This is a basic feature for the constructors. The constructor overloading allows the object to be initialized according to the user.",
  },
  {
    id: 153,
    Question: "Which is correct syntax?",
    Options: [
      "a) classname objectname= new() integer;",
      "b) classname objectname= new classname;",
      "c) classname objectname= new classname();",
      "d) classname objectname= new() classname();",
    ],
    Answer:
      "Answer: c\nExplanation: The syntax for object creating in java with calling a constructor for is it is as in option c. The syntax must contain the classname followed by the object name. The keyword new must be used and then the constructor call with or without the parameters as required.",
  },
  {
    id: 154,
    Question: "Which among the following best describes the constructors?",
    Options: [
      "a) A function which is called whenever an object is referenced",
      "b) A function which is called whenever an object is created to initialize the members",
      "c) A function which is called whenever an object is assigned to copy the values",
      "d) A function which is called whenever an object is to be given values for members",
    ],
    Answer:
      "Answer: b\nExplanation: The constructors are special type of functions which are called whenever an object is created. This is to initialize the data members of the class. The constructor allocates memory space for all the data members.",
  },
  {
    id: 155,
    Question: "Which among the following best describes destructor?",
    Options: [
      "a) A function which is called just before the objects are destroyed",
      "b) A function which is called after each reference to the object",
      "c) A function which is called after termination of the program",
      "d) A function which is called before calling any member function",
    ],
    Answer:
      "Answer: a\nExplanation: The Destructors are special functions which are called just before an object is destroyed. This functions is responsible to free all the allocated resources to the object. Objects are destroyed whenever those go out of scope.",
  },
  {
    id: 156,
    Question: "Which among the following represents correct constructor?",
    Options: [
      "a) ()classname",
      "b) ~classname()",
      "c) –classname()",
      "d) classname()",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors must contain only the class name. The class name is followed by the blank parenthesis or we can have parameters if some values are to be passed.",
  },
  {
    id: 157,
    Question:
      "Which among the following is correct syntax for the destructors?",
    Options: [
      "a) classname()",
      "b) ()classname",
      "c) ~classname()",
      "d) -classname()",
    ],
    Answer:
      "Answer: c\nExplanation: The destructor must have same name as that of the corresponding class. The class name should be preceded by the tilde symbol (~). ",
  },
  {
    id: 158,
    Question: "Which among the following is true?",
    Options: [
      "a) First the constructor of parent classes are called in sequence of inheritance",
      "b) First the constructor of child classes are called in the sequence of inheritance",
      "c) First constructor called is of the object being created",
      "d) Constructors are called randomly",
    ],
    Answer:
      "Answer: a\nExplanation: First the constructor of parent class are called. The order in which the parent class constructors are called is same in the sequence of inheritance used.",
  },
  {
    id: 159,
    Question: "What is the sequence of destructors call?",
    Options: [
      "a) Same order as that of the constructors call",
      "b) Random order",
      "c) According to the priority",
      "d) Revere of the order of constructor call",
    ],
    Answer:
      "Answer: d\nExplanation: The destructors are called in the reverse order as that of the constructors being called. This is done to ensure that all the resources are released in sequence. That is, the derived class destructors will be called first.",
  },
  {
    id: 160,
    Question: "The destructors _____________________",
    Options: [
      "a) Can have maximum one argument",
      "b) Can’t have any argument",
      "c) Can have more than one argument",
      "d) Can’t have more than 3 arguments",
    ],
    Answer:
      "Answer: b\nExplanation: The destructors doesn’t have any arguments. The destructors have to be called implicitly whenever an object goes out of scope. The user can’t pass argument to the implicit call.",
  },
  {
    id: 161,
    Question: "Destructor calls ________________ (C++)",
    Options: [
      "a) Are only implicit",
      "b) Are only explicit",
      "c) Can be implicit or explicit",
      "d) Are made at end of program only",
    ],
    Answer:
      "Answer: c\nExplanation: The destructors are usually called implicitly whenever an object goes out of scope. The destructors can also be called explicitly if required. The call must be made, implicitly or explicitly.",
  },
  {
    id: 162,
    Question: "Number of destructors called are ____________",
    Options: [
      "a) Always equal to number of constructors called",
      "b) Always less than the number of constructors called",
      "c) Always greater than the number of constructors called",
      "d) Always less than or equal to number of constructors",
    ],
    Answer:
      "Answer: a\nExplanation: Destructor will be called only to free the resources allocated for an object. The resources are allocated only the constructor for an object is called.",
  },
  {
    id: 163,
    Question: "For explicit call _________________",
    Options: [
      "a) The destructor must be private",
      "b) The destructor must be public",
      "c) The destructor must be protected",
      "d) The destructor must be defined outside the class",
    ],
    Answer:
      "Answer: b\nExplanation: The destructor must be public for explicit calls. If it is made private or protected then it won’t be accessible outside the class. There is no restriction of definition the destructor outside the class.",
  },
  {
    id: 164,
    Question: "Which among the following is true for destructors?",
    Options: [
      "a) Destructors can be overloaded",
      "b) Destructors can be define more than one time",
      "c) Destructors can’t be overloaded",
      "d) Destructors are overloaded in derived classes",
    ],
    Answer:
      "Answer: b\nExplanation: Even if the class have 4 constructors, only one would be used. And only one destructor is allowed. ",
  },
  {
    id: 165,
    Question: "The constructor _____________",
    Options: [
      "a) Have a return type",
      "b) May have a return type",
      "c) Of derived classes have return type",
      "d) Doesn’t have a return type",
    ],
    Answer:
      "Answer: c\nExplanation: The destructors can never be overloaded. The destructors doesn’t have arguments. And to get overloaded, they must have different signature. This is not possible if arguments are not allowed.",
  },
  {
    id: 166,
    Question: "The destructors ____________",
    Options: [
      "a) Have a return type",
      "b) May have a return type",
      "c) Of derived classes have return type",
      "d) Doesn’t have a return type",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors doesn’t have any return type. The constructors are intended to allocate the resources for the object. Memory spaces are to be finalized.",
  },
  {
    id: 167,
    Question: "Which among the following describes a destructor?",
    Options: [
      "a) A special function that is called to free the resources, acquired by the object",
      "b) A special function that is called to delete the class",
      "c) A special function that is called anytime to delete an object",
      "d) A special function that is called to delete all the objects of a class",
    ],
    Answer:
      "Answer: a\nExplanation: It is used to free the resources that the object might had used in its lifespan. The destructors are called implicitly whenever an object’s life ends.",
  },
  {
    id: 168,
    Question: "When a destructor is called?",
    Options: [
      "a) After the end of object life",
      "b) Anytime in between object’s lifespan",
      "c) At end of whole program",
      "d) Just before the end of object life",
    ],
    Answer:
      "Answer: d\nExplanation: The destructor is called just before the object go out of scope or just before its life ends. This is done to ensure that all the resources reserved for the object are used and at last, are made free for others.",
  },
  {
    id: 169,
    Question:
      "Which among the following is correct for abstract class destructors?",
    Options: [
      "a) It doesn’t have destructors",
      "b) It has destructors",
      "c) It may or may not have destructors",
      "d) It contains an implicit destructor",
    ],
    Answer:
      "Answer: a\nExplanation: It doesn’t have destructors. Since an abstract class don’t have constructors, and hence can’t have instances. Having this case, the abstract classes don’t have destructors too, because that would be of no use here.",
  },
  {
    id: 170,
    Question:
      "If in multiple inheritance, class C inherits class B, and Class B inherits class A. In which sequence are their destructors called if an object of class C was declared?",
    Options: [
      "a) ~C() then ~B() then ~A()",
      "b) ~B() then ~C() then ~A()",
      "c) ~A() then ~B() then ~C()",
      "d) ~C() then ~A() then ~B()",
    ],
    Answer:
      "Answer: a\nExplanation: The destructors are always called in the reverse order of how the constructors were called. Here class A constructor would have been created first if Class C object is declared. Hence class A destructor is called at last. ",
  },
  {
    id: 171,
    Question:
      '5. Choose the correct sequence of destructors being called for the following code.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A<span class="br0">{</span>   <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="br0">{</span>   <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span> <span class="kw2">public</span> A, <span class="kw2">public</span> B<span class="br0">{</span>   <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) ~A(), ~B(), ~C()",
      "b) ~B(), ~C(), ~A()",
      "c) ~A(), ~C(), ~B()",
      "d) ~C(), ~B(), ~A()",
    ],
    Answer:
      "Answer: d\nExplanation: In multiple inheritance, the constructors are called in the sequence of how they are written in inheritance sequence. And the destructors will be called in the reverse order. This can be cross verified just by printing a message from each destructor defined in classes.",
  },
  {
    id: 172,
    Question: "When is the destructor of a global object called?",
    Options: [
      "a) Just before end of program",
      "b) Just after end of program",
      "c) With the end of program",
      "d) Anytime when object is not needed",
    ],
    Answer:
      "Answer: a\nExplanation: This is because the lifespan of global object is from start of the program, till the end of the program. And hence program end is the end of global object too. Just before the end of program, the destructor will be called to free the acquired resources by the objects.",
  },
  {
    id: 173,
    Question: "How the constructors and destructors can be differentiated?",
    Options: [
      "a) Destructor have a return type but constructor doesn’t",
      "b) Destructors can’t be defined by the programmer, but constructors can be defined",
      "c) Destructors are preceded with a tilde (~) symbol, and constructor doesn’t",
      "d) Destructors are same as constructors in syntax",
    ],
    Answer:
      "Answer: c\nExplanation: The destructors are preceded with the tilde (~) symbol. The name is same as that of the class. These also doesn’t have any return type.",
  },
  {
    id: 174,
    Question: "Destructors can be ________",
    Options: [
      "a) Abstract type",
      "b) Virtual",
      "c) Void",
      "d) Any type depending on situation",
    ],
    Answer:
      "Answer: a\nExplanation: The destructors doesn’t accept the arguments. Those are just used to free up the resources.",
  },
  {
    id: 175,
    Question:
      "Global destructors execute in ___________ order after main function is terminated.",
    Options: [
      "a) Sequential",
      "b) Random",
      "c) Reverse",
      "d) Depending on priority",
    ],
    Answer:
      "Answer: b\nExplanation: The destructors can be virtual. It is actually advised to keep the destructors virtual always. This is done to suppress the problems that may arise if inheritance is involved.",
  },
  {
    id: 176,
    Question: "When is it advised to have user defined destructor?",
    Options: [
      "a) When class contains some pointer to memory allocated in class",
      "b) When a class contains static variables",
      "c) When a class contains static functions",
      "d) When a class is inheriting another class only",
    ],
    Answer:
      "Answer: c\nExplanation: The destructors are always called in reverse order no matter which destructor it is. This is done to ensure that all the resources are able to get free. And no resource is kept busy.",
  },
  {
    id: 177,
    Question:
      "Which among the following is correct for the destructors concept?",
    Options: [
      "a) Destructors can be overloaded",
      "b) Destructors can have only one parameter at maximum",
      "c) Destructors are always called after object goes out of scope",
      "d) There can be only one destructor in a class",
    ],
    Answer:
      "Answer: a\nExplanation: This is always advised to have user defined destructor when pointers are involved in class. This is usually done to ensure that the memory, that was allocated dynamically, gets free after use and doesn’t cause memory leak.",
  },
  {
    id: 178,
    Question:
      '13. Which class destructor will be called first, when following code go out of scope?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A<span class="br0">{</span>  <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="br0">{</span>  <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span> <span class="kw2">public</span> B<span class="br0">{</span>  <span class="br0">}</span><span class="sy4">;</span>\nA a<span class="sy4">;</span>\nB b<span class="sy4">;</span>\nC c<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) ~A()", "b) ~B()", "c) ~C()", "d) ~B() and ~C()"],
    Answer:
      "Answer: d\nExplanation: This is so because the destructors can’t be overloaded. And the destructor must have the same name as that of class with a tilde symbol preceding the name of the destructor. Hence there can be only one destructor in a class. Since more than one function with same name and signature can’t be present in same scope.",
  },
  {
    id: 179,
    Question:
      "When an object is passed to a function, its copy is made in the function and then ______________",
    Options: [
      "a) The destructor of the copy is called when function is returned",
      "b) The destructor is never called in this case",
      "c) The destructor is called but it is always implicit",
      "d) The destructor must be user defined",
    ],
    Answer:
      "Answer: c\nExplanation: The constructor that would have created at last, its destructor will be called first when the code goes out of scope. This will help the program to manage the resources more efficiently.",
  },
  {
    id: 180,
    Question: "What happens when an object is passed by reference?",
    Options: [
      "a) Destructor is not called",
      "b) Destructor is called at end of function",
      "c) Destructor is called when function is out of scope",
      "d) Destructor is called when called explicitly",
    ],
    Answer:
      "Answer: a\nExplanation: When an object is passed to a function, its copy is made in the function. This copy acts as a real object till the function is live. When the function is returned, the copy’s destructor is called to free the resources held by it.",
  },
  {
    id: 181,
    Question: "How many types of access specifiers are provided in OOP (C++)?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: c\nExplanation: Only 3 types of access specifiers are available. Namely, private, protected and public. All these three can be used according to the need of security of members.",
  },
  {
    id: 182,
    Question:
      "Which among the following can be used together in a single class?",
    Options: [
      "a) Only private",
      "b) Private and Protected together",
      "c) Private and Public together",
      "d) All three together",
    ],
    Answer:
      "Answer: d\nExplanation: All the classes can use any of the specifiers as needed. There is no restriction on how many of them can be used together.",
  },
  {
    id: 183,
    Question:
      "Which among the following can restrict class members to get inherited?",
    Options: ["a) Private", "b) Protected", "c) Public", "d) All three"],
    Answer:
      "Answer: a\nExplanation: Private members of a class can’t be inherited. These members can only be accessible from members of its own class only. It is used to secure the data.",
  },
  {
    id: 184,
    Question:
      "Which access specifier is used when no access specifier is used with a member of class (java)?",
    Options: ["a) Private", "b) Default", "c) Protected", "d) Public"],
    Answer:
      "Answer: b\nExplanation: Default access is used if the programmer doesn’t specify the specifier. This acts in a similar way as that of private. But since nothing is specified we call it to default access.",
  },
  {
    id: 185,
    Question:
      "Which specifier allows a programmer to make the private members which can be inherited?",
    Options: [
      "a) Private",
      "b) Default",
      "c) Protected",
      "d) Protected and default",
    ],
    Answer:
      "Answer: c\nExplanation: Protected access is used to make the members private. But those members can be inherited. This gives both security and code reuse capability to a program.",
  },
  {
    id: 186,
    Question: "Which among the following is false?",
    Options: [
      "a) Private members can be accessed using friend functions",
      "b) Member functions can be made private",
      "c) Default members can’t be inherited",
      "d) Public members are accessible from other classes also",
    ],
    Answer:
      "Answer: c\nExplanation: The default members can be inherited. Provided that they are in same package. It works in a little different way from private access specifier.",
  },
  {
    id: 187,
    Question:
      "If a class has all the private members, which specifier will be used for its implicit constructor?",
    Options: ["a) Private", "b) Public", "c) Protected", "d) Default"],
    Answer:
      "Answer: b\nExplanation: The implicit constructor will always be public. Otherwise the class wouldn’t be able to have instances. In turn, no objects will be created and the class can only be used for inheritance.",
  },
  {
    id: 188,
    Question:
      "If class A has add() function with protected access, and few other members in public. Then class B inherits class A privately. Will the user will not be able to call _________ from the object of class B.",
    Options: [
      "a) Any function of class A",
      "b) The add() function of class A",
      "c) Any member of class A",
      "d) Private, protected and public members of class A",
    ],
    Answer:
      "Answer: d\nExplanation: Class B object will not be able to call any of the private, protected and public members of class A. It is not only about the function add(), but all the members of class A will become private members of class B.",
  },
  {
    id: 189,
    Question:
      "Which access specifier should be used in a class where the instances can’t be created?",
    Options: [
      "a) Private default constructor",
      "b) All private constructors",
      "c) Only default constructor to be public",
      "d) Only default constructor to be protected",
    ],
    Answer:
      "Answer: b\nExplanation: All the constructors must be made private. This will restrict the instance of class to be made anywhere in the program. Since the constructors are private, no instance will be able to call them and hence won’t be allocated with any memory space.",
  },
  {
    id: 190,
    Question:
      "On which specifier’s data, does the size of a class’s object depend?",
    Options: [
      "a) All the data members are added",
      "b) Only private members are added",
      "c) Only public members are added",
      "d) Only default data members are added",
    ],
    Answer:
      "Answer: a\nExplanation: All the data members are counted to calculate the size of an object of a class. The data member access specifier doesn’t play any role here. Hence all the data size will be added.",
  },
  {
    id: 191,
    Question:
      "If class B inherits class A privately. And class B has a friend function. Will the friend function be able to access the private member of class A?",
    Options: [
      "a) Yes, because friend function can access all the members",
      "b) Yes, because friend function is of class B",
      "c) No, because friend function can only access private members of friend class",
      "d) No, because friend function can access private member of class A also",
    ],
    Answer:
      "Answer: c\nExplanation: The friend function of class B will not be able to access private members of class A. Since B is inheriting class A privately, the members will become private in class B. But private members of class A won’t be inherited at all. Hence it won’t be accessible.",
  },
  {
    id: 192,
    Question:
      "If an abstract class has all the private members, then _________",
    Options: [
      "a) No class will be able to implement members of abstract class",
      "b) Only single inheritance class can implement its members",
      "c) Only other enclosing classes will be able to implement those members",
      "d) No class will be able to access those members but can implement.",
    ],
    Answer:
      "Answer: a\nExplanation: The classes which inherit the abstract class, won’t be able to implement the members of abstract class. The private members will not be inherited. This will restrict the subclasses to implement those members.",
  },
  {
    id: 193,
    Question:
      "Which access specifier should be used so that all the parent class members can be inherited and accessed from outside the class?",
    Options: [
      "a) Private",
      "b) Default or public",
      "c) Protected or private",
      "d) Public",
    ],
    Answer:
      "Answer: d\nExplanation: All the members must be of public access. So that the members can be inherited easily. Also, the members will be available from outside the class.",
  },
  {
    id: 194,
    Question:
      "Which access specifier is usually used for data members of a class?",
    Options: ["a) Private", "b) Default", "c) Protected", "d) Public"],
    Answer:
      "Answer: a\nExplanation: All the data members should be made private to ensure the highest security of data. In special cases we can use public or protected access, but it is advised to keep the data members private always.",
  },
  {
    id: 195,
    Question: "Which specifier should be used for member functions of a class?",
    Options: ["a) Private", "b) Default", "c) Protected", "d) Public"],
    Answer:
      "Answer: d\nExplanation: It is always advised that the member functions should be kept public so that those functions can be used from out of the class. This is usually done to ensure that the features provided by the class can be used at its maximum.",
  },
  {
    id: 196,
    Question:
      "If a function has to be called only by using other member functions of the class, what should be the access specifier used for that function?",
    Options: ["a) Private", "b) Protected", "c) Public", "d) Default"],
    Answer:
      "Answer: a\nExplanation: The function should be made private. In this way, the function will be available to be called only from the class member functions. Hence the function will be secure from the outside world.",
  },
  {
    id: 197,
    Question:
      '2. Which among the following is correct for the code given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student\n<span class="br0">{</span>  \n\t<span class="kw2">private</span><span class="sy4">:</span> student<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t<span class="br0">}</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> student<span class="br0">(</span> <span class="kw4">int</span> x<span class="br0">)</span> \n\t<span class="br0">{</span> \n\t\tmarks <span class="sy1">=</span>x<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) The object can never be created",
      "b) The object can be created without parameters",
      "c) Only the object with only 1 parameter can be created",
      "d) Only the object with some parameters can be created",
    ],
    Answer:
      "Answer: c\nExplanation: For creating object without parameters, the default constructor must be defined in public access. But here, only parameterized constructor is public, hence the objects being created with only one parameter will only be allowed. ",
  },
  {
    id: 198,
    Question:
      '3. Which among the following is true for the code given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">private</span> <span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span> <span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">20</span><span class="br0">]</span><span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span>\n\tA<span class="br0">(</span><span class="kw4">int</span> x<span class="sy1">=</span><span class="nu0">100</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span>x<span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Objects can be created with one parameter or without parameter",
      "b) Object can be created only with one parameter",
      "c) Object can be created with more than one parameter",
      "d) Objects can be create only without parameter",
    ],
    Answer:
      "Answer: a\nExplanation: The constructor here has a default argument constructor. Hence we can pass one parameter, but that is optional. If an object is created without parameter, the default value will be used in the constructor definition.",
  },
  {
    id: 199,
    Question:
      "Which among the following is correct to call a private member from outside the class?",
    Options: [
      "a) object.memberfunction( parameters );",
      "b) object->memberfunction( parameters );",
      "c) object->memberfunction( parameteres); or object.memberfunction( parameters );",
      "d) Not possible",
    ],
    Answer:
      "Answer: d\nExplanation: The private member function will not be accessible from outside the class. Hence any syntax will not work to access the private members. If you have the address of the member, may be you can access those members, but that is a totally different case and concept.",
  },
  {
    id: 200,
    Question:
      "If private members have to be accessed directly from outside the class but the access specifier must not be changed, what should be done?",
    Options: [
      "a) Specifier must be changed",
      "b) Friend function should be used",
      "c) Other public members should be used",
      "d) It is not possible",
    ],
    Answer:
      "Answer: b\nExplanation: For calling the function directly, we can’t use another function because that will be indirect call. Using friend function, we can access the private members directly. ",
  },
  {
    id: 201,
    Question: "Which access specifier is/are most secure during inheritance?",
    Options: [
      "a) Private",
      "b) Default",
      "c) Protected",
      "d) Private and default",
    ],
    Answer:
      "Answer: a\nExplanation: The private members are most secure in inheritance. The default members can still be in inherited in special cases, but the private members can’t be accessed in any case.",
  },
  {
    id: 202,
    Question:
      '8. Which option is false for the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">private</span> <span class="sy4">:</span> <span class="kw4">int</span> sum<span class="br0">(</span><span class="kw4">int</span> x, <span class="kw4">int</span> y<span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw1">return</span> x<span class="sy2">+</span>y<span class="sy4">;</span> \n\t<span class="br0">}</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t<span class="br0">}</span>\n\tA<span class="br0">(</span><span class="kw4">int</span> x, <span class="kw4">int</span> y<span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>sum<span class="br0">(</span>x,y<span class="br0">)</span><span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Constructor can be created with zero argument",
      "b) Constructor prints sum, if two parameters are passed with object creation",
      "c) Constructor will give error if float values are passed",
      "d) Constructor will take 0 as default value of parameters if not passed",
    ],
    Answer:
      "Answer: c\nExplanation: The constructor is using a static member to keep the count of the number of objects created. This is done because the variable c is static and hence the value will be common for all the objects created.",
  },
  {
    id: 203,
    Question:
      '9. Which member will never be used from the following class?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span> \n\t<span class="kw4">int</span> marks<span class="sy4">;</span> <span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">20</span><span class="br0">]</span><span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n\t<span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”Marks<span class="sy1">=</span> ”<span class="sy3">&amp;</span>lt<span class="st0">\'&amp;lt;marks;\n\t\tcout&amp;lt;&amp;lt;”Student”;\n\t}\n};</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) name variable will never be used",
      "b) marks variable will never be used",
      "c) constructor will never be used",
      "d) disp() function will never be used",
    ],
    Answer:
      "Answer: d\nExplanation: Constructor is not having any default arguments hence no default value will be given to any parameters. Only integer values must be passed to the constructor if we need the sum as output, otherwise if float values are passed, type mismatch will be shown as error.",
  },
  {
    id: 204,
    Question: "Which among the following is true?",
    Options: [
      "a) Private member functions can’t be overloaded",
      "b) Private member functions can be overridden",
      "c) Private member functions can’t be overloaded with a public member",
      "d) Private member  function can’t be overridden",
    ],
    Answer:
      "Answer: a\nExplanation: Variable name will never be used. It is a private member. None other than class members can access name, also, neither the constructor nor the disp() function are accessing the variable name. Hence it will never be accessible.",
  },
  {
    id: 205,
    Question:
      '12. Which data member in following code will be used whenever an object is created?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">Class A\n<span class="br0">{</span> \n   <span class="kw4">int</span> x<span class="sy4">;</span> <span class="kw4">int</span> y<span class="sy4">;</span> <span class="kw4">int</span> z<span class="sy4">;</span>\n   <span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n   <span class="br0">{</span> \n      y<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> x<span class="sy1">=</span><span class="nu0">100</span><span class="sy2">*</span>y<span class="sy4">;</span> \n   <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) x will be used",
      "b) y will be used",
      "c) z will be used",
      "d) All will be used",
    ],
    Answer:
      "Answer: a\nExplanation: The private functions can also be overloaded. This can be done in usual way by having the same name of the member function and having different signature. Only thing is, they must be accessed from members of class only.",
  },
  {
    id: 206,
    Question:
      '13. Which member can be considered most secure in the code below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\t<span class="kw4">int</span> a<span class="sy4">;</span>\n\t<span class="kw2">private</span> <span class="sy4">:</span> <span class="kw4">int</span> b<span class="sy4">;</span>\n\t<span class="kw2">protected</span> <span class="sy4">:</span> <span class="kw4">int</span> c<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">int</span> d<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) a", "b) b", "c) c", "d) d"],
    Answer:
      "Answer: d\nExplanation: The private member functions can be overloaded but they can’t be overridden. This is because, overriding means a function with same name in derived class, gets more priority when called from object of derived class. Here, the member function is private so there is no way that it can be overridden.",
  },
  {
    id: 207,
    Question:
      '14. Which among the following is correct for the code given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">private</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t<span class="br0">}</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="kw4">int</span> x<span class="br0">)</span>\n\t<span class="br0">{</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nA a<span class="sy4">;</span>\nA b<span class="br0">(</span><span class="nu0">100</span><span class="br0">)</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Program will give compile time error",
      "b) Program will run fine",
      "c) Program will give runtime error",
      "d) Program will give logical error",
    ],
    Answer:
      "Answer: c\nExplanation: Whenever an object will be created, the constructor will be called. Inside constructor we are using the data members x and y. Hence these two will always be used with each object creation.",
  },
  {
    id: 208,
    Question: "Which among the following is correct?",
    Options: [
      "a) Private specifier must be used before public specifier",
      "b) Private specifier must be used before protected specifier",
      "c) Private specifier must be used first",
      "d) Private specifier can be used anywhere in class",
    ],
    Answer:
      "Answer: b\nExplanation: The default variables can be inherited in some special cases but the public members can never be inherited. Hence the most secure data member in the class is b.",
  },
  {
    id: 209,
    Question:
      "Which among the following best describes the protected specifier?",
    Options: [
      "a) Members are most secure and can’t be used outside class",
      "b) Members are secure but can be used outside the class",
      "c) Members are secure as private, but can be inherited",
      "d) Members are secure like private, but can’t be inherited",
    ],
    Answer:
      "Answer: c\nExplanation: The members which are made protected, are most secure if inheritance is not used. But, this facility is provided to keep those members private and with that, they can be inherited by other classes. This is done to make the code more flexible.",
  },
  {
    id: 210,
    Question: "If a constructor is defined in protected access, then?",
    Options: [
      "a) It’s instance can be created inside the subclasses",
      "b) It’s instance can be created anywhere in the program",
      "c) It’s instance can be created inside the subclasses and main() function",
      "d) It’s instance can be created inside the parent class only",
    ],
    Answer:
      "Answer: a\nExplanation: The instances will be allowed to be created only inside the sub classes. This is because the protected members will be inherited and hence the constructor too. This will allow the subclasses to call the constructor whenever an object is created.",
  },
  {
    id: 211,
    Question:
      '3. For the following code, choose the correct option.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>  \n\t<span class="kw4">int</span> marks<span class="sy4">;</span>\n\t<span class="kw2">protected</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span> <span class="kw4">int</span> x<span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span>x<span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) The instances can be created only in subclasses",
      "b) The instances can be created only in main() function",
      "c) The instances can be created only in parent class",
      "d) The instances can be created anywhere in the program",
    ],
    Answer:
      "Answer: d\nExplanation: The instances can be created anywhere in the program. The only restriction will be on which constructor will have to be called. The instances with zero arguments will be allowed to be created only inside the subclasses, but the instances with one argument can be created anywhere in the program.",
  },
  {
    id: 212,
    Question:
      "If the protected members are to be made accessible only to the nearest subclass and no further subclasses, which access specifier should be used in inheritance?",
    Options: [
      "a) The sub class should inherit the parent class privately",
      "b) The sub class should inherit the parent class as protected",
      "c) The sub class should inherit the parent class as public",
      "d) The sub class can use any access modifier",
    ],
    Answer:
      "Answer: a\nExplanation: The sub class should use private inheritance. This will allow only the nearest sub classes to inherit the protected members and then those members will become private. Hence further inheritance of those members will not be possible.",
  },
  {
    id: 213,
    Question:
      '5. What will be the output of the following code (all header files and required things are included)?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> marks<span class="sy4">;</span>\n\t<span class="kw2">protected</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="kw4">int</span> x<span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span>x<span class="sy4">;</span> \n\t<span class="br0">}</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span>\n<span class="kw2">class</span> B\n<span class="br0">{</span>\n\tA a<span class="sy4">;</span>\n\tA b<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\nmain<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tA a, b<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span>\n\tB c<span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Program runs fine",
      "b) Program gives runtime error",
      "c) Program gives compile time error",
      "d) Program gives logical error",
    ],
    Answer:
      "Answer: c\nExplanation: The objects being created with assignment value are allowed, if the constructor accepts only 1 argument. But main() function will not be able to create the object here with assignment, as the constructor which accepts one argument is in protected mode in the class.",
  },
  {
    id: 214,
    Question:
      '6. Which among the following is true for the given code below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">protected</span> <span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> \n\tA<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tmarks<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n\tdisp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”marks<span class="sy1">=</span>”<span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>marks<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span> <span class="kw2">protected</span> A\n<span class="br0">{</span>\n<span class="br0">}</span><span class="sy4">;</span>\nB b<span class="sy4">;</span>\nb.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Object b can’t access disp() function",
      "b) Object b can access disp() function inside its body",
      "c) Object b can’t access members of class A",
      "d) Program runs fine",
    ],
    Answer:
      "Answer: a\nExplanation: The object of class B can’t access the members of A outside the class. This is because the class is being inherited in protected access, so all the members will become protected in subclass B.",
  },
  {
    id: 215,
    Question: "Protected members differ from default members as _______",
    Options: [
      "a) Protected members can be accessed outside package using inheritance, but default can’t",
      "b) Default members can be accessed outside package using inheritance, but protected can’t",
      "c) Protected members are allowed for inheritance but Default members are not allowed",
      "d) Both are same",
    ],
    Answer:
      "Answer: a\nExplanation: The protected members are allowed in the same package but can also be accessed in other packages using inheritance. But the default members can never be accessible in other packages.",
  },
  {
    id: 216,
    Question:
      "If all the members are defined in protected specifier then? (Constructors not considered)",
    Options: [
      "a) Instance of class can’t be created",
      "b) Instance of class can be created anywhere",
      "c) Instance of class can be created only in subclasses",
      "d) Instance of class can be created only in main() function",
    ],
    Answer:
      "Answer: b\nExplanation: The instances can be created anywhere in the program. This is because the constructors are not considered among the members defined in protected mode. Hence the default implicit constructor will be used whenever an object is created.",
  },
  {
    id: 217,
    Question:
      '9. Which among the following is correct for the code given?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n    <span class="kw2">private</span><span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span>\n    A<span class="br0">(</span><span class="br0">)</span>\n    <span class="br0">{</span> \n    <span class="br0">}</span>\n    Public <span class="sy4">:</span> disp<span class="br0">(</span><span class="br0">)</span>\n    <span class="br0">{</span> \n          <span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> marks<span class="sy4">;</span> \n     <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span> <span class="kw2">public</span> A\n<span class="br0">{</span>\n<span class="br0">}</span>\nB b<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Instance of B will not be created",
      "b) Instance of B will be created",
      "c) Program gives compile time error",
      "d) Program gives runtime error",
    ],
    Answer:
      "Answer: a\nExplanation: Instance of B will not be created. When you try to create an instance of B, First the constructor of parent class will be called, but the parent class constructor is private, hence it won’t be able to initialize and allocate memory for parent class members. In turn, the object of B will not be created.",
  },
  {
    id: 218,
    Question: "If protected inheritance is used then _____",
    Options: [
      "a) Public members become public in subclass",
      "b) Protected members become public in subclass",
      "c) Protected members become protected in subclass",
      "d) Protected and Public members become protected in subclass",
    ],
    Answer:
      "Answer: d\nExplanation: The protected and public members of the parent class will become the protected members in subclass. This is predefined rule of inheritance. The reason behind is to maintain the level of security in subclass too.",
  },
  {
    id: 219,
    Question:
      "If protected members are to be accessed from outside the class then__________",
    Options: [
      "a) Members must be inherited publicly in subclass",
      "b) Members must accessed using class pointers",
      "c) Members must be accessed as usual",
      "d) Members must be made public",
    ],
    Answer:
      "Answer: d\nExplanation: The members must be made public, otherwise it is not possible. In every case, the protected members will act as private members if it’s about access specifier. It will only be inherited, that too will lead to make those members protected again, in subclasses.",
  },
  {
    id: 220,
    Question: "Which among the following can use protected access specifier?",
    Options: [
      "a) Members which may be used in other packages",
      "b) Members which have to be secure and should be used by other packages/subclass",
      "c) Members which have to be accessed from anywhere in the program",
      "d) Members which have to be as secure as private but can be used by main() function",
    ],
    Answer:
      "Answer: b\nExplanation: The members which have to be secure and might get used in other packages or subclasses can use protected access. This also allows the members to be safe from accidental modification.",
  },
  {
    id: 221,
    Question:
      "If a class have default constructor defined in private access, and one parameter constructor in protected mode, how will it be possible to create instance of object?",
    Options: [
      "a) Define a constructor in public access with different signature",
      "b) Directly create the object in the subclass",
      "c) Directly create the object in main() function",
      "d) Not possible",
    ],
    Answer:
      "Answer: b\nExplanation: The statement given is true. The clear difference is protected members are available in other packages also, but the default members are available within the package only.",
  },
  {
    id: 222,
    Question:
      '15. What will be the output of the program given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\tPublic <span class="sy4">:</span> A<span class="br0">(</span><span class="kw4">int</span> a<span class="sy1">=</span><span class="nu0">0</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”<span class="kw3">new</span> A”<span class="sy4">;</span>\n        <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\nA a<span class="sy4">;</span>\nA b<span class="sy4">;</span>\nA c<span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) new A new A new A",
      "b) newAnewAnewA",
      "c) new Anew Anew A",
      "d) new A new Anew A",
    ],
    Answer:
      "Answer: a\nExplanation: If a new constructor is defined in public access. That will be available to the whole program. Only restriction will be of the way to use it.",
  },
  {
    id: 223,
    Question:
      '1. Which among the following is true for the code given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> marks<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>marks<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span>\n<span class="kw2">class</span> B<span class="sy4">:</span> <span class="kw2">protected</span> A\n<span class="br0">{</span>\n\t<span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">20</span><span class="br0">]</span><span class="sy4">;</span>\n<span class="br0">}</span>\nA a<span class="sy4">;</span> a.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\nB b<span class="sy4">;</span> b.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Only object of class A can access disp() function",
      "b) Only object of class B can access disp() function",
      "c) Both instances can access disp() function",
      "d) Accessing disp() outside class is not possible",
    ],
    Answer:
      "Answer: a\nExplanation: The object of class A can access the disp() function. This is because the disp() function is public in definition of class A. But it can’t be accessed from instance of class B because the disp() function is protected in class B, since it was inherited as protected.",
  },
  {
    id: 224,
    Question:
      "If the members have to be accessed from anywhere in the program and other packages also, which access specifier should be used?",
    Options: ["a) Public", "b) Private", "c) Protected", "d) Default"],
    Answer:
      "Answer: a\nExplanation: The access specifier must be public so as to access the members outside the class and anywhere within the program without using inheritance. This is a rule, predefined for the public members.",
  },
  {
    id: 225,
    Question:
      "Which among the following have least security according to the access permissions allowed?",
    Options: ["a) Private", "b) Default", "c) Protected", "d) Public"],
    Answer:
      "Answer: d\nExplanation: The public members are available to the whole program. This makes the members most vulnerable to accidental changes, which may result in unwanted modification and hence unstable programming.",
  },
  {
    id: 226,
    Question:
      "Which among the following can be used for outermost class access specifier in java?",
    Options: ["a) Private", "b) Public", "c) Default", "d) Default or Public"],
    Answer:
      "Answer: d\nExplanation: Either default or public access specifier must be used for outermost classes. Private can be used with inner classes. This is done so that all the members can access and use the utmost class and that program execution can be done from anywhere. Inner classes can be made private for security.",
  },
  {
    id: 227,
    Question: "If members of a super class are public, then________",
    Options: [
      "a) All those will be available in subclasses",
      "b) None of those will be available in subclasses",
      "c) Only data members will be available in subclass",
      "d) Only member functions will be available in subclass",
    ],
    Answer:
      "Answer: b\nExplanation: The statement given is false. This is because when we inherit the members they can either be made more secure or be at same access. But the visibility reduction is not possible, for example, if a member is protected in parent class, then it can only be made protected or private in subclass and not public in any case.",
  },
  {
    id: 228,
    Question:
      "How many public class(s) (outermost) can be there in a java program?",
    Options: ["a) 1", "b) 2", "c) 3", "d) As required"],
    Answer:
      "Answer: a\nExplanation: All the members will be available in subclasses. Though it is not guaranteed whether the members will be available in subsequent subclasses from the first subclass.",
  },
  {
    id: 229,
    Question:
      '8. What is the output of the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">package pack1<span class="sy4">;</span>\n<span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span> A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tSystem.<span class="me1">out</span>.<span class="me1">print</span><span class="br0">(</span>“object created”<span class="br0">)</span><span class="sy4">;</span> \n\t<span class="br0">}</span>   \n<span class="br0">}</span>\npackage pack2<span class="sy4">;</span>\nimport pack1.<span class="sy2">*</span><span class="sy4">;</span>\n<span class="kw2">class</span> B\n<span class="br0">{</span>\n\tA a<span class="sy1">=</span><span class="kw3">new</span> A<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Output is: object created",
      "b) Output is: object createdobject created",
      "c) Compile time error",
      "d) Run time error",
    ],
    Answer:
      "Answer: a\nExplanation: There can be only one public class in a java program. The public class name must match the name of file. And there can’t be more than one class with same name in a single program in same scope. Hence it is not possible to have more than one public class in java program.",
  },
  {
    id: 230,
    Question: "Which among the following for public specifier is false?",
    Options: [
      "a) The static members can’t be public",
      "b) The public members are available in other packages too",
      "c) The subclasses can inherit the public members privately",
      "d) There can be only one public class in java program",
    ],
    Answer:
      "Answer: c\nExplanation: The program will give compile time error. Class A is defined with default access specifier. This directly means that class A will be available within package only. Even if the constructor is public, the object will not be created.",
  },
  {
    id: 231,
    Question:
      "A class has its default constructor defined as public. Class B inherits class A privately. The class ___________",
    Options: [
      "a) B will not be able to have instances",
      "b) Only A can have instances",
      "c) Only B can have instances",
      "d) Both classes can have instances",
    ],
    Answer:
      "Answer: a\nExplanation: The static members are not property of any object of the class. Instead, those are treated as property of class. This allows us to have public static members too.",
  },
  {
    id: 232,
    Question:
      "Which specifier can be used to inherit protected members as protected in subclass but public as public in subclass?",
    Options: ["a) Private", "b) Default", "c) Public", "d) Protected"],
    Answer:
      "Answer: d\nExplanation: Class A can have instances as it has public default constructor. Class will have its own constructors defined. Hence both classes can have instances. ",
  },
  {
    id: 233,
    Question: "Which among the following is true for public class?",
    Options: [
      "a) There can be more than one public class in a single program",
      "b) Public class members can be used without using instance of class",
      "c) Public class is available only within the package",
      "d) Public classes can be accessed from any other class using instance",
    ],
    Answer:
      "Answer: c\nExplanation: The specifier that can make protected member’s protected in subclass and public member’s public in subclass, is public. This is done to maintain the security level of protected members of parent class.",
  },
  {
    id: 234,
    Question: "If a class doesn’t have public members, then________",
    Options: [
      "a) None of its members will be able to get inherited",
      "b) None of its instance creation will be allowed",
      "c) None of its member function can be called outside the class",
      "d) None of its data members will be able to get initial value",
    ],
    Answer:
      "Answer: d\nExplanation: The public class is a usual class. There is no special rule but the members of the class can be accessed from other classes using instance of the class. This is usually useful to define main() function.",
  },
  {
    id: 235,
    Question:
      "In multi-level inheritance(all public), the public members of parent/superclass will ________",
    Options: [
      "a) Will continue to get inherited subsequently",
      "b) Will not be inherited after one subclass inheritance",
      "c) Will not be available to be called outside class",
      "d) Will not be able to allocated with any memory space",
    ],
    Answer:
      "Answer: c\nExplanation: According to rule of private, protected and default access specifiers, none of the members under these specifiers will be able to get invoked outside the class. We are not sure about the members of class specifically so other options doesn’t give a fixed answer.",
  },
  {
    id: 236,
    Question:
      "Which specifier allows to secure the public members of base class in inherited classes?",
    Options: [
      "a) Private",
      "b) Protected",
      "c) Public",
      "d) Private and Protected",
    ],
    Answer:
      "Answer: a\nExplanation: The public inheritance makes the public members of the base class, public in derived classes. This can be used when the same feature have to be redefined with each new class inheriting the base class.",
  },
  {
    id: 237,
    Question:
      "What is the term used to indicate the variable and constants of a class?",
    Options: [
      "a) Data members",
      "b) Variables of class",
      "c) Data characters",
      "d) Constants",
    ],
    Answer:
      "Answer: a\nExplanation: The variables inside a class are termed data members of the class. It is not a mandatory rule but variables are used to refer to usual variables used in functions or globally. The term is given because the values stored in those variables represent some kind of data related to class.",
  },
  {
    id: 238,
    Question: "Data members ________________ (C++)",
    Options: [
      "a) Can be initialized with declaration in classes",
      "b) Can be initialized only with help of constructors",
      "c) Can be initialized either in declaration or by constructor",
      "d) Can’t be initialized",
    ],
    Answer:
      "Answer: b\nExplanation: The data members are not property of class, those are property of the instances of the class. And the memory for the data members are not reserved until a constructor is called. Hence we use constructors for their initialization after the memory is reserved.",
  },
  {
    id: 239,
    Question: "Which among the following is true for data members?",
    Options: [
      "a) Private data members can be initialized with declaration in class",
      "b) Static members are initialized in constructors",
      "c) Protected data members can be initialized in class directly",
      "d) Static data members are defined outside class, not in constructor",
    ],
    Answer:
      "Answer: d\nExplanation: Static members are not property of instances of classes. Those are shared by all the object of classes. Hence those are defined outside the constructor, so as to make them common for all the objects.",
  },
  {
    id: 240,
    Question:
      "What should be done for data member to be of user defined structure type?",
    Options: [
      "a) The structure must have been defined before class.",
      "b) The structure must have been defined after the class definition",
      "c) The structure must be predefined",
      "d) The structure type data members can’t be used",
    ],
    Answer:
      "Answer: a\nExplanation: The structure must have been defined prior to its use. If the structure is not defined, then the memory space will not be allocated for its members. This leads to undefined use of new data types.",
  },
  {
    id: 241,
    Question: "How many data members can a class contain?",
    Options: ["a) 27", "b) 255", "c) 1024", "d) As many as required"],
    Answer:
      "Answer: d\nExplanation: Any class can have as many data members as required. The only restriction that may arise is when there is not enough memory space. This gives flexibility to define a class with best properties possible.",
  },
  {
    id: 242,
    Question: "How to access data members of a class?",
    Options: [
      "a) Dot operator",
      "b) Arrow operator",
      "c) Dot or arrow as required",
      "d) Dot, arrow or direct call",
    ],
    Answer:
      "Answer: c\nExplanation: The data members can never be called directly. Dot operator is used to access the members with help of object of class. Arrow is usually used if pointers are used.",
  },
  {
    id: 243,
    Question:
      "To create a pointer to a private data member of a class, outside the class, which among the following is correct?",
    Options: [
      "a) Return the address of the private data member using a member function",
      "b) Access the private member using a pointer outside class",
      "c) Declare the member as pointer inside the class",
      "d) Not possible to create pointer to a private member",
    ],
    Answer:
      "Answer: a\nExplanation: We can call a public member function and return the address of any private data member. Though the pointer being returned must be defined inside class itself. And the returned address can be stored in a pointer.",
  },
  {
    id: 244,
    Question:
      "Which among the following is true for use of setter() and getter() function?",
    Options: [
      "a) Considered best for manipulating data values",
      "b) Considered the only proper way to manipulate the values",
      "c) Considered specially for private members manipulation",
      "d) Considered a red flag, and not recommended for large scale use",
    ],
    Answer:
      "Answer: d\nExplanation: This concept of getter and setter functions is not acceptable if used too much. This is considered to be inappropriate in OOP perspective. Though it is commonly used, it doesn’t work according to OOP concepts at some higher level of understanding.",
  },
  {
    id: 245,
    Question:
      '9. What is the output of following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw4">int</span> n<span class="sy1">=</span><span class="nu0">10</span><span class="sy4">;</span>\t\t<span class="co1">// global</span>\n<span class="kw2">class</span> A<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\t<span class="kw2">private</span> <span class="sy4">:</span> <span class="kw4">int</span> n<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">int</span> m<span class="sy4">;</span>\n\tA<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tn<span class="sy1">=</span><span class="nu0">100</span><span class="sy4">;</span> m<span class="sy1">=</span><span class="nu0">50</span><span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\t<span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>”n”<span class="sy1">&lt;&lt;</span>m<span class="sy1">&lt;&lt;</span>n<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) 1050100", "b) 1005010", "c) n5010", "d) n50100"],
    Answer:
      "Answer: d\nExplanation: In cout we have specified n as a string to be printed. And m is a variable so its value gets printed. And global variable will not be used since local variable have more preference.",
  },
  {
    id: 246,
    Question: "The static member functions can only use ________",
    Options: [
      "a) Static data members",
      "b) Private data members",
      "c) Protected data members",
      "d) Constant data members",
    ],
    Answer:
      "Answer: a\nExplanation: The static member functions can only access static data members. This is because the static member function can’t work with the properties that change object to object. It is mandatory that only the common properties of all the objects be used. And only static data members are common to all as those are property of class.",
  },
  {
    id: 247,
    Question: "What is the keyword used to make data members have same value?",
    Options: ["a) static", "b) const", "c) double", "d) abstract"],
    Answer:
      "Answer: b\nExplanation: The data members in a class can never refer to own class type. This is not possible because the data members should have some memory allocated for its object before the self-reference is used, but class must call constructor for that. Hence not possible. ",
  },
  {
    id: 248,
    Question: "Which data members can be inherited but are private to a class?",
    Options: [
      "a) Private",
      "b) Protected",
      "c) Protected and Static",
      "d) Privately inherited",
    ],
    Answer:
      "Answer: b\nExplanation: The keyword const can be used anywhere to make the variable have same value all the time. This restriction is made to use the same value whenever required. Also, this can restrict accidental changes.",
  },
  {
    id: 249,
    Question:
      "Which among the following is not allowed for data member declaration?",
    Options: [
      "a) int a;",
      "b) static int a;",
      "c) abstract a;",
      "d) Boolean a;",
    ],
    Answer:
      "Answer: b\nExplanation: Static members inheritance also depends on the type of specifier they have. Only the protected members can be inherited but remain private to class. If static members are defined in private access, they won’t be allowed for inheritance.",
  },
  {
    id: 250,
    Question: "Which among the following best describes member functions?",
    Options: [
      "a) Functions which are defined within the class",
      "b) Functions belonging a class",
      "c) Functions in public access of a class",
      "d) Functions which are private to class",
    ],
    Answer:
      "Answer: b\nExplanation: We can’t say that only functions that are defined inside class are member functions. There can be some inherited functions. Though they doesn’t belong to the class but are property of the objects once inheritance is used. So the nearest definition is functions belonging to a class. ",
  },
  {
    id: 251,
    Question: "How many types of member functions are generally there in C++?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: d\nExplanation: There are 5 types of member functions that are generally provided in C++. Namely, simple, static, const, inline and friend member functions. Member functions are specific to classes. ",
  },
  {
    id: 252,
    Question:
      "How can a static member function be called in the main function?",
    Options: [
      "a) Using dot operator",
      "b) Using arrow operator",
      "c) Using dot or arrow operator",
      "d) Using dot, arrow or using scope resolution operator with class name",
    ],
    Answer:
      "Answer: d\nExplanation: The member functions can be called using only the dot operator or the arrow operator. But the static members can be called using directly the class name followed by the scope resolution operator and static member function name. This is useful when you don’t have any object to call the member. ",
  },
  {
    id: 253,
    Question: "What are inline member functions?",
    Options: [
      "a) Member functions which can be called without object",
      "b) Member functions whose definition is expanded in place of its call",
      "c) Member functions whose definition is faster than simple function",
      "d) Member function which is defined in single line",
    ],
    Answer:
      "Answer: b\nExplanation: The member functions whose definition is expanded at the call, and no jump to function and return happened, are termed as inline functions. This is used to make the program faster and more efficient. ",
  },
  {
    id: 254,
    Question:
      "What happens if non static members are used in static member function?",
    Options: [
      "a) Compile time error",
      "b) Runtime error",
      "c) Executes fine",
      "d) Executes if that member function is not used",
    ],
    Answer:
      "Answer: a\nExplanation: There must be specific memory space allocated for the data members before the static member functions uses them. But the space is not reserved if object is not declared. Hence only if static members are not used, it leads to compile time error. ",
  },
  {
    id: 255,
    Question: "Static member functions _____________",
    Options: [
      "a) Contains “this” pointer for data members",
      "b) Contains “this” pointer if used for member functions",
      "c) Doesn’t contain “this” pointer",
      "d) Doesn’t contain “this” pointer if member functions are referred",
    ],
    Answer:
      "Answer: c\nExplanation: The static member functions doesn’t contain “this” pointer. Static member functions can’t be defined as const or volatile also. These are restrictions on static member functions. ",
  },
  {
    id: 256,
    Question: "How to access members of the class inside a member function?",
    Options: [
      "a) Using this pointer only",
      "b) Using dot operator",
      "c) Using arrow operator",
      "d) Used directly or with this pointer",
    ],
    Answer:
      "Answer: d\nExplanation: The members of a class can be used directly inside a member function. We can use this pointer when there is a conflict between data members of class and arguments/local function variable names. ",
  },
  {
    id: 257,
    Question:
      "For overloading “( )”, “[ ]” or “->” operators, a class __________",
    Options: [
      "a) Must use static member functions",
      "b) Must use non-static member functions",
      "c) Must be non-static member and should not be friend of class",
      "d) Must use static member function or a friend member function",
    ],
    Answer:
      "Answer: c\nExplanation: For overloading those operators for a class, the class must use non-static member function so that doesn’t remain common to all the objects, and each object can use it independently. The friend functions is also restricted so as to keep the security of data. ",
  },
  {
    id: 258,
    Question: "If a virtual member function is defined ___________",
    Options: [
      "a) It should not contain any body and defined by subclasses",
      "b) It must contain body and overridden by subclasses",
      "c) It must contain body and be overloaded",
      "d) It must not contain any body and should not be derived",
    ],
    Answer:
      "Answer: a\nExplanation: The virtual functions are defined using virtual keyword. These are made in order to make all the classes to define them as the class gets inherited. Increases code understanding. ",
  },
  {
    id: 259,
    Question: "Member functions of a generic class are _____________",
    Options: [
      "a) Not generic",
      "b) Automatically generic",
      "c) To be made generic explicitly",
      "d) Given default type as double",
    ],
    Answer:
      "Answer: b\nExplanation: When generic type is used in a class, the functions are automatically generic. This is so because the functions would use the same type as defined to make the class generic. The functions will get to know the type of data as soon as the generic class is used. It’s inbuilt feature. ",
  },
  {
    id: 260,
    Question: "Member function of a class can ____________",
    Options: [
      "a) Access all the members of the class",
      "b) Access only Public members of the class",
      "c) Access only the private members of the class",
      "d) Access subclass members",
    ],
    Answer:
      "Answer: a\nExplanation: The member functions has access to all the members of the class. Whenever data members of a class, which might be private, have to be modified, we make use of these member functions. This is more secure way to manipulate data. ",
  },
  {
    id: 261,
    Question:
      '12. Which among the following is proper syntax for class given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span> \n\t<span class="kw4">int</span> a,b<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span> <span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) void disp::A(){  }",
      "b) void A::disp(){  }",
      "c) void A:disp() {  cout<<a<<b ; }",
      "d) void disp:A(){ cout<<a<<b;  }",
    ],
    Answer:
      "Answer: b\nExplanation: The syntax in option void A::disp(){  } is correct. We use scope resolution to represent the member function of a class and to write its definition. It is not necessary for a function to have anything in its definition. ",
  },
  {
    id: 262,
    Question: "A member function can _______________ of the same class.",
    Options: [
      "a) Call other member functions",
      "b) Call only private member functions",
      "c) Call only static member functions",
      "d) Call only const member functions",
    ],
    Answer:
      "Answer: a\nExplanation: We can call one function inside another function to access some data of class. A public member function can be used to call a private member function which directly manipulates the private data of class. ",
  },
  {
    id: 263,
    Question: "Which member function doesn’t require any return type?",
    Options: [
      "a) Static",
      "b) Constructor",
      "c) Const",
      "d) Constructor and destructor",
    ],
    Answer:
      "Answer: d\nExplanation: All the member functions work same as normal functions with syntax. But the constructor and destructor are also considered as member functions of a class, and they never have any data type. ",
  },
  {
    id: 264,
    Question: "Which among the following is not possible for member function?",
    Options: [
      "a) Access protected members of parent class",
      "b) Definition without return type",
      "c) Access public members of subclass",
      "d) Access static members of class",
    ],
    Answer:
      "Answer: c\nExplanation: A member function of a class can only have the access to the members of its own class and parent classes if inheritance used. Otherwise a member function can never access the members of a subclass. Accessing static members of a class is possible by normal and static member functions. ",
  },
  {
    id: 265,
    Question: "What are local classes?",
    Options: [
      "a) Classes declared inside a package",
      "b) Classes declared inside a function",
      "c) Classes declared inside a class",
      "d) Classes declared inside structure",
    ],
    Answer:
      "Answer: b\nExplanation: The classes declared inside a package are available to all the functions and classes, hence can’t be called local. This is somewhat similar concept that we use to denote variables of a function. The classes declared inside functions will be local to them.",
  },
  {
    id: 266,
    Question: "All member functions of a local class must be ___________",
    Options: [
      "a) Defined outside class body",
      "b) Defined outside the function definition",
      "c) Defined inside the class body",
      "d) Defined at starting of program",
    ],
    Answer:
      "Answer: c\nExplanation: There is a restriction on where the member functions of the local class should be define. Those must be defined inside the class body only. This is to reduce the ambiguity and complexity of program.",
  },
  {
    id: 267,
    Question:
      "Can local class members access/use the general local variables (except static, abstract etc.) of the function in which it is defined?",
    Options: [
      "a) Yes, it can access with arrow operator",
      "b) No, it can’t access with dot operator",
      "c) Yes, it can access using dot operator",
      "d) No, it can’t access In anyway",
    ],
    Answer:
      "Answer: d\nExplanation: The local variables of the functions are not available to the member functions of the class. This is done to reduce the ambiguity in variables and their access rules.",
  },
  {
    id: 268,
    Question:
      "Which type of data can a local class access from the function in which it is defined?",
    Options: [
      "a) Static and extern",
      "b) Abstract and static",
      "c) Void and extern",
      "d) Const and static",
    ],
    Answer:
      "Answer: a\nExplanation: The local classes have this feature to access the static and extern variables of the function in which those are defined. This feature is available since these type of data are common to the program and is created only one time. Run time creation and destruction of these variables is not done. The only restriction that may apply is those members must be constants.",
  },
  {
    id: 269,
    Question: "Can static variables be declared inside a local class?",
    Options: [
      "a) Yes, with public access specifier",
      "b) Yes, anywhere as required",
      "c) No, not possible in private access specifier",
      "d) No, not possible anyway",
    ],
    Answer:
      "Answer: a\nExplanation: This is a little tricky part with local classes. Though the local class can’t access the general variables of the function but can access the types that are defined inside the function. This is because the whole definition of that type would be existing inside the class.",
  },
  {
    id: 270,
    Question:
      "All the member functions of local classes are __________ by default.",
    Options: ["a) Static", "b) Inline", "c) Abstract", "d) Virtual"],
    Answer:
      "Answer: d\nExplanation: No, the static variables can’t be declared inside a local class. This is because each time the function is called, all the variables get created again and are destroyed as soon as the function is returned. This would have been possible id the static variable was of function.",
  },
  {
    id: 271,
    Question: "Which language can use inheritance with local classes?",
    Options: ["a) Kotlin", "b) Java", "c) SmallTalk", "d) SAP ABAP"],
    Answer:
      "Answer: c\nExplanation: All the members are defined inside the class body. And when the member functions are defined inside the class body, they are made inline by default. If the definition is too complex, those are made normal functions.",
  },
  {
    id: 272,
    Question: "How many local classes can be defined inside a single function?",
    Options: ["a) Only 1", "b) Only 3", "c) Only 5", "d) As many as required"],
    Answer:
      "Answer: a\nExplanation: This is a rule that the enclosing function doesn’t have any special access to the members of the local class. This is done to maintain the security of class members. And to adhere to the rules of OOP.",
  },
  {
    id: 273,
    Question: "All the data members of local class must be ___________",
    Options: [
      "a) Defined with declaration",
      "b) Defined in constructor",
      "c) Declared and defined in constructor",
      "d) Declared using a member function",
    ],
    Answer:
      "Answer: d\nExplanation: Other language might support inheritance with local classes but those doesn’t provide all the proper features of inheritance. Language SAP ABAP provides a way to implement inheritance with local classes efficiently.",
  },
  {
    id: 274,
    Question: "Can two different functions have local class with same name?",
    Options: [
      "a) Yes, since local",
      "b) No, names must be different",
      "c) No, scope doesn’t work here",
      "d) No, ambiguity arises",
    ],
    Answer:
      "Answer: d\nExplanation: The local classes can be defined as required. There is no restriction on the number of local classes that can be defined inside a function. But all those classes must follow the rules and restrictions.",
  },
  {
    id: 275,
    Question: "What is the scope of local class?",
    Options: [
      "a) Within the class only",
      "b) Within the function",
      "c) Within the program",
      "d) One time creation and live till end of program",
    ],
    Answer:
      "Answer: b\nExplanation: The data members follow the same rules as of simple classes. Hence the data members must be declared first. Then their definition must be given using the constructors.",
  },
  {
    id: 276,
    Question:
      "Can a function, other than the enclosing function of local class, access the class members?",
    Options: [
      "a) Yes, using object",
      "b) Yes, using direct call",
      "c) Yes, using pointer",
      "d) No, can’t access",
    ],
    Answer:
      "Answer: a\nExplanation: The local classes can have same name if they belong to different functions. The classes would be local to those specific functions and hence can have same name. This is same as that of local variables concept.",
  },
  {
    id: 277,
    Question:
      "Which among the following is the main advantage of using local classes?",
    Options: [
      "a) Make program more efficient",
      "b) Makes program execution faster",
      "c) Helps to add extra functionality to a function",
      "d) Helps to add more members to a function",
    ],
    Answer:
      "Answer: b\nExplanation: The scope of a local class is limited only within the function definition. The function can use the class as usual as local variables. The class gets destroyed as soon as the function is returned.",
  },
  {
    id: 278,
    Question: "Which among the following best describes a nested class?",
    Options: [
      "a) Class inside a class",
      "b) Class inside a function",
      "c) Class inside a package",
      "d) Class inside a structure",
    ],
    Answer:
      "Answer: a\nExplanation: If a class is defined inside another class, the inner class is termed as nested class. The inner class is local to the enclosing class. Scope matters a lot here.",
  },
  {
    id: 279,
    Question: "Which feature of OOP reduces the use of nested classes?",
    Options: [
      "a) Encapsulation",
      "b) Inheritance",
      "c) Binding",
      "d) Abstraction",
    ],
    Answer:
      "Answer: b\nExplanation: Using inheritance we can have the security of the class being inherited. The subclass can access the members of parent class. And have more feature than a nested class being used.",
  },
  {
    id: 280,
    Question: "How many categories are nested classes divided into?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: a\nExplanation: The nested classes are divided into two main categories. Namely, Static and non-static. The categories define how the classes can be used inside another class.",
  },
  {
    id: 281,
    Question:
      "Non-static nested classes have access to _____________ from enclosing class.",
    Options: [
      "a) Private members",
      "b) Protected members",
      "c) Public members",
      "d) All the members",
    ],
    Answer:
      "Answer: d\nExplanation: The non-static nested class can access all the members of the enclosing class. All the data members and member functions can be accessed from the nested class. Even if the members are private, they can be accessed.",
  },
  {
    id: 282,
    Question:
      "Static nested classes doesn’t have access to _________________ from enclosing class.",
    Options: [
      "a) Private members",
      "b) Protected members",
      "c) Public members",
      "d) Any other members",
    ],
    Answer:
      "Answer: d\nExplanation: The static nested class doesn’t have access to any other members of the enclosing class. This is a rule that is made to ensure that only the data which can be common to all the object is being accessed by the static nested class.",
  },
  {
    id: 283,
    Question: "The nested class can be declared ___________________",
    Options: [
      "a) Public",
      "b) Private",
      "c) Protected",
      "d) Public, Protected, Private or Package private",
    ],
    Answer:
      "Answer: d\nExplanation: The nested class can be declared with any specifier, unlike the outer classes which can only be declared public or package private. This is flexibility given for the nested class being a member of enclosing class.",
  },
  {
    id: 284,
    Question: "Use of nested class ____________ encapsulation.",
    Options: [
      "a) Increases",
      "b) Decreases",
      "c) Doesn’t affect",
      "d) Slightly decreases",
    ],
    Answer:
      "Answer: a\nExplanation: The use of nested class increases encapsulation as the inner class is getting even more grouped into the enclosing class. Firstly the class encapsulate the data, having nested classes can increase the encapsulation even further.",
  },
  {
    id: 285,
    Question:
      "Which among the following is the correct advantage/disadvantage of nested classes?",
    Options: [
      "a) Makes the code more complex",
      "b) Makes the code unreadable",
      "c) Makes the code efficient and readable",
      "d) Makes the code multithreaded",
    ],
    Answer:
      "Answer: c\nExplanation: The use of nested classes makes the code more streamed towards a single concept. This allows to group the most similar and related classes together and makes it even more efficient and readable.",
  },
  {
    id: 286,
    Question: "How to access static nested classes?",
    Options: [
      "a) OuterClass.StaticNestedClass",
      "b) OuterClass->StaticNestedClass",
      "c) OuterClass(StaticNestedClass)",
      "d) OuterClass[StaticNestedClass]",
    ],
    Answer:
      "Answer: a\nExplanation: Like any other member of the class, the static nested class uses the dot operator to be accessed. The reason behind is, the static classes can’t work with instances, hence we use enclosing class name to access static nested class.",
  },
  {
    id: 287,
    Question: "How to create object of the inner class?",
    Options: [
      "a) OuterClass.InnerClass innerObject = outerObject.new InnerClass();",
      "b) OuterClass.InnerClass innerObject = new InnerClass();",
      "c) InnerClass innerObject = outerObject.new InnerClass();",
      "d) OuterClass.InnerClass = outerObject.new InnerClass();",
    ],
    Answer:
      "Answer: b\nExplanation: The nested classes are associated with the object of the enclosing class. Hence have direct access to the members of that object. Hence the inner class can’t have any static members of its own. Otherwise the rule of static members would be violated using enclosing class instance.",
  },
  {
    id: 288,
    Question:
      "Instance of inner class can exist only _______________ enclosing class.",
    Options: ["a) Within", "b) Outside", "c) Private to", "d) Public to"],
    Answer:
      "Answer: a\nExplanation: An instance of inner class can exist only within instance of outer class. To instantiate the inner class, one must instantiate the outer class first. This can be done by the correct syntax above.",
  },
  {
    id: 289,
    Question:
      "If a declaration of a member in inner class has the same name as that in the outer class, then ________________ enclosing scope.",
    Options: [
      "a) Outer declaration shadows inner declaration in",
      "b) Inner declaration shadows outer declaration in",
      "c) Declaration gives compile time error",
      "d) Declaration gives runtime error",
    ],
    Answer:
      "Answer: c\nExplanation: The variable x denotes the parameter of the function. And this.x is the variable of the inner class. Test.this.x is the variable of the outer class. Hence we get this output.",
  },
  {
    id: 290,
    Question:
      "A static nested class is _____________ class in behavior that is nested in another _________ class.",
    Options: [
      "a) Top level, top level",
      "b) Top level, low level",
      "c) Low level, top level",
      "d) Low level, low level",
    ],
    Answer:
      "Answer: a\nExplanation: The class defined inside another class is local to the enclosing class. This means that the instance of inner class will not be valid outside the enclosing class. There is no restriction for instance to be private or public always.",
  },
  {
    id: 291,
    Question: "In how many ways can an object be passed to a function?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: c\nExplanation: The objects can be passed in three ways. Pass by value, pass by reference and pass by address. These are the general ways to pass the objects to a function.",
  },
  {
    id: 292,
    Question: "If an object is passed by value _____________",
    Options: [
      "a) A new copy of object is created implicitly",
      "b) The object itself is used",
      "c) Address of the object is passed",
      "d) A new object is created with new random values",
    ],
    Answer:
      "Answer: a\nExplanation: When an object is passed by value, a new object is created implicitly. This new object uses the implicit values assignment, same as that of the object being passed.",
  },
  {
    id: 293,
    Question:
      "Pass by address passes the address of object _________ and pass by reference passes the address of the object _________",
    Options: [
      "a) Explicitly, explicitly",
      "b) Implicitly, implicitly",
      "c) Explicitly, Implicitly",
      "d) Implicitly, explicitly",
    ],
    Answer:
      "Answer: c\nExplanation: Pass by address uses the explicit address passing to the function whereas pass by reference implicitly passes the address of the object.",
  },
  {
    id: 294,
    Question:
      "If an object is passed by reference, the changes made in the function ___________",
    Options: [
      "a) Are reflected to the main object of caller function too",
      "b) Are reflected only in local scope of the called function",
      "c) Are reflected to the copy of the object that is made during pass",
      "d) Are reflected to caller function object and called function object also",
    ],
    Answer:
      "Answer: a\nExplanation: When an object is passed by reference, its address is passed implicitly. This will make changes to the main function whenever any modification is done.",
  },
  {
    id: 295,
    Question:
      "Constructor function is not called when an object is passed to a function, will its destructor be called when its copy is destroyed?",
    Options: [
      "a) Yes, depending on code",
      "b) Yes, must be called",
      "c) No, since no constructor was called",
      "d) No, since same object gets used",
    ],
    Answer:
      "Answer: b\nExplanation: Even though the constructor is not called when the object is passed to a function, the copy of the object is still created, where the values of the members are same. When the object have to be destroyed, the destructor is called to free the memory and resources that the object might have reserved.",
  },
  {
    id: 296,
    Question:
      "When an object is returned by a function, a _______________ is automatically created to hold the return value.",
    Options: [
      "a) Temporary object",
      "b) Virtual object",
      "c) New object",
      "d) Data member",
    ],
    Answer:
      "Answer: a\nExplanation: The temporary object is created. It holds the return value. The values gets assigned as required, and the temporary object gets destroyed.",
  },
  {
    id: 297,
    Question:
      "Is the destruction of temporary object safe (while returning object)?",
    Options: [
      "a) Yes, the resources get free to use",
      "b) Yes, other objects can use the memory space",
      "c) No, unexpected side effects may occur",
      "d) No, always gives rise to exceptions",
    ],
    Answer:
      "Answer: c\nExplanation: The destruction of temporary variable may give rise to unexpected logical errors. Consider the destructor which may free the dynamically allocated memory. But this may abort the program if another is still trying to copy the values from that dynamic memory.",
  },
  {
    id: 298,
    Question:
      "How to overcome the problem arising due to destruction of temporary object?",
    Options: [
      "a) Overloading insertion operator",
      "b) Overriding functions can be used",
      "c) Overloading parenthesis or returning object",
      "d) Overloading assignment operator and defining copy constructor",
    ],
    Answer:
      "Answer: d\nExplanation: The problem can be solved by overloading the assignment operator to get the values that might be getting returned while the destructor free the dynamic memory. Defining copy constructor can help us to do this in even simpler way.",
  },
  {
    id: 299,
    Question: "How many objects can be returned at once?",
    Options: ["a) Only 1", "b) Only 2", "c) Only 16", "d) As many as required"],
    Answer:
      "Answer: a\nExplanation: Like any other value, only one object can be returned at ones. The only possible way to return more than one object is to return address of an object array. But that again comes under returning object pointer.",
  },
  {
    id: 300,
    Question:
      '10. What will be the output of the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">Class A\n<span class="br0">{</span> \n\t<span class="kw4">int</span> i<span class="sy4">;</span> \n\t<span class="kw2">public</span> <span class="sy4">:</span> A<span class="br0">(</span><span class="kw4">int</span> n<span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\ti<span class="sy1">=</span>n<span class="sy4">;</span> <span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”inside constructor ”<span class="sy4">;</span>\n\t<span class="br0">}</span> \n\t~A<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>\n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”destroying  ”<span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>i<span class="sy4">;</span>\n\t<span class="br0">}</span>\n\t<span class="kw4">void</span> seti<span class="br0">(</span><span class="kw4">int</span> n<span class="br0">)</span>\n\t<span class="br0">{</span>\n\t\ti<span class="sy1">=</span>n<span class="sy4">;</span>\n\t<span class="br0">}</span>\n\t<span class="kw4">int</span> geti<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>\n\t\t<span class="kw1">return</span> I<span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw4">void</span> t<span class="br0">(</span>A ob<span class="br0">)</span>\n<span class="br0">{</span> \n\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”something ”<span class="sy4">;</span>\n<span class="br0">}</span>\n<span class="kw4">int</span> main<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tA a<span class="br0">(</span><span class="nu0">1</span><span class="br0">)</span><span class="sy4">;</span>\n\tt<span class="br0">(</span>a<span class="br0">)</span><span class="sy4">;</span>\n\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>”<span class="kw3">this</span> is i in main ”<span class="sy4">;</span>\n\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>a.<span class="me1">geti</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) inside constructor something destroying 2this is i in main destroying 1",
      "b) inside constructor something this is i in main destroying 1",
      "c) inside constructor something destroying 2this is i in main",
      "d) something destroying 2this is i in main destroying 1",
    ],
    Answer:
      "Answer: a\nExplanation: Although the object constructor is called only ones, the destructor will be called twice, because of destroying the copy of the object that is temporarily created. This is the concept of how the object should be passed and manipulated.",
  },
  {
    id: 301,
    Question:
      "It is necessary to return the object if it was passed by reference to a function.",
    Options: [
      "a) Yes, since the object must be same in caller function",
      "b) Yes, since the caller function needs to reflect the changes",
      "c) No, the changes are made automatically",
      "d) No, the changes are made explicitly",
    ],
    Answer:
      "Answer: c\nExplanation: Having the address being passed to the function, the changes are automatically made to the main function. In all the cases if the address is being used, the same memory location will be updated with new values.",
  },
  {
    id: 302,
    Question: "How many objects can be passed to a function simultaneously?",
    Options: [
      "a) Only 1",
      "b) Only an array",
      "c) Only 1 or an array",
      "d) As many as required",
    ],
    Answer:
      "Answer: d\nExplanation: There is no limit to how many objects can be passed. This works in same way as that any other variable gets passed. Array and object can be passed at same time also.",
  },
  {
    id: 303,
    Question:
      "If an object is passed by address, will be constructor be called?",
    Options: [
      "a) Yes, to allocate the memory",
      "b) Yes, to initialize the members",
      "c) No, values are copied",
      "d) No, temporary object is created",
    ],
    Answer:
      "Answer: c\nExplanation: A copy of all the values is created. If the constructor is called, there will be a compile time error or memory shortage. This happens because each time a constructor is called, it try to call itself again and that goes infinite times.",
  },
  {
    id: 304,
    Question:
      "Is it possible that an object of is passed to a function, and the function also have an object of same name?",
    Options: [
      "a) No, Duplicate declaration is not allowed",
      "b) No, 2 objects will be created",
      "c) Yes, Scopes are different",
      "d) Yes, life span is different",
    ],
    Answer:
      "Answer: a\nExplanation: There can’t be more than one variable or object with the same name in same scope. The scope is same, since the object is passed, it becomes local to function and hence function can’t have one more object of same name.",
  },
  {
    id: 305,
    Question: "What is reference to an object?",
    Options: [
      "a) It is address of an object",
      "b) It is address of where the variables and methods of object are stored",
      "c) It is pointer having address of an object",
      "d) It is address of only variables and not the methods of an object",
    ],
    Answer:
      "Answer: b\nExplanation: Reference indicates the address where the object’s variables and methods are stored. It is not actual address of the object. This is done to directly use the variables and methods whenever required.",
  },
  {
    id: 306,
    Question:
      "Whenever an object is assigned to a variable or passed to a method ________________",
    Options: [
      "a) Actually the objects aren’t used",
      "b) Actually only the objects are used",
      "c) Actually a pointer to an object is used",
      "d) Actually copy of object is used",
    ],
    Answer:
      "Answer: a\nExplanation: Whenever an object is assigned to a variable or passed to a method, we aren’t actually using objects there. Actually the reference to the objects is used. The reference makes a lot of difference as the main object may or may not get affected depending on the code.",
  },
  {
    id: 307,
    Question:
      "Does use of object reference in assignment or passing means copy of the object is being used?",
    Options: [
      "a) No, because the copy would create a new temporary variable",
      "b) No, because the copy would not help to make changes to main object",
      "c) Yes, because the reference directly means using address",
      "d) Yes, because the reference directly means the constructors are involved",
    ],
    Answer:
      "Answer: c\nExplanation: We can’t say that the reference involves constructors in passing the objects to some method. The reference is used to denote the addresses and hence to point to the main object itself. There is no copy involved.",
  },
  {
    id: 308,
    Question:
      "Is there any explicit use of pointers in java that would be applicable to objects?",
    Options: [
      "a) Yes, we use reference for this purpose",
      "b) Yes, we use java arrays for this purpose",
      "c) No, implicit pointing is possible",
      "d) No, direct class names should be used",
    ],
    Answer:
      "Answer: d\nExplanation: The expected output would be like p2 with values 100, 100. But this is not the case. The tricky part is assignment used (p2=p1;). Here a reference is created from object p1 to p2, and not any new object that would copy p1’s values. Hence when we change the values of p1 object members. There changes are reflected to the object p2 also.",
  },
  {
    id: 309,
    Question: "Can a super class object give reference to a subclass method?",
    Options: [
      "a) No, it is not possible",
      "b) Maybe, it is possible",
      "c) No, it’s not possible",
      "d) No, It’s not possible in few cases only",
    ],
    Answer:
      "Answer: c\nExplanation: The question clearly asks if there is any explicit use of pointers related to objects. Pointers are not applicable in java first of all. Secondly, the pointing in java is achieved implicitly using the references and object arrays. ",
  },
  {
    id: 310,
    Question:
      '7. What will be the output of the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">import java.<span class="me1">awt</span>.<span class="me1">Point</span><span class="sy4">;</span>\n<span class="kw2">class</span> Testing\n<span class="br0">{</span>\n\t<span class="kw2">public</span> <span class="kw4">static</span> <span class="kw4">void</span> main<span class="br0">(</span>String<span class="br0">[</span><span class="br0">]</span> args<span class="br0">)</span>\n\t<span class="br0">{</span>\n\t\tPoint t1,t2,t3<span class="sy4">;</span>\n\t\tt1<span class="sy1">=</span><span class="kw3">new</span> Point<span class="br0">(</span><span class="nu0">100</span>,<span class="nu0">100</span><span class="br0">)</span><span class="sy4">;</span>\n\t\tt2<span class="sy1">=</span>t1<span class="sy4">;</span>\n\t\tt3<span class="sy1">=</span>t1<span class="sy4">;</span>\n\t\tt1.<span class="me1">x</span><span class="sy1">=</span><span class="nu0">200</span><span class="sy4">;</span>\n\t\tt1.<span class="me1">y</span><span class="sy1">=</span><span class="nu0">200</span><span class="sy4">;</span>\n\t\tt2.<span class="me1">x</span><span class="sy1">=</span><span class="nu0">300</span><span class="sy4">;</span>\n\t\tt3.<span class="me1">y</span><span class="sy1">=</span><span class="nu0">500</span><span class="sy4">;</span>\n\t\tSystem.<span class="me1">out</span>.<span class="me1">println</span><span class="br0">(</span>“Point <span class="nu0">1</span><span class="sy4">:</span> ” <span class="sy2">+</span> p1.<span class="me1">x</span> <span class="sy2">+</span> ”, “ <span class="sy2">+</span> p1.<span class="me1">y</span><span class="br0">)</span><span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Point 1: 200, 200",
      "b) Point 1: 100,100",
      "c) Point 1: 300, 300",
      "d) Point 1: 300, 500",
    ],
    Answer:
      "Answer: c\nExplanation: The object of a super class can never refer to methods of a subclass. Whereas vice versa is possible. If there is an overridden function in subclass, then the object of super class will execute the method of itself and not from the subclass.",
  },
  {
    id: 311,
    Question:
      "If a reference variable is declared final then _________________",
    Options: [
      "a) It can never be reassigned to refer to a different object",
      "b) It can be assigned to refer to any object anytime",
      "c) It can never be assigned with any object",
      "d) It can be assigned with 2 or more objects simultaneously",
    ],
    Answer:
      "Answer: d\nExplanation: When references are used, all the variables point to the same object. Whenever any of the variable changes any values, it will be reflected to all the variables pointing to the same object.",
  },
  {
    id: 312,
    Question:
      "Which of the members are referred by this pointer usually (Java)?",
    Options: [
      "a) Members of class where this is used",
      "b) Member of the parent class where this is used",
      "c) Members that are passed as argument to the object",
      "d) Pointers are not applicable in java",
    ],
    Answer:
      "Answer: a\nExplanation: Since the variable is declared final. It will have a constant value throughout the program. It can refer to only one object at a time. And if it was made to refer to none of the object, it would have got no use.",
  },
  {
    id: 313,
    Question: "How to refer to method of nested class?",
    Options: [
      "a) enclosingClassObject.innerClassObject.method();",
      "b) innerClassObject.method();",
      "c) method();",
      "d) depends on where the method is being called",
    ],
    Answer:
      "Answer: a\nExplanation: We use this pointer to differentiate the members of the class where this is used to the other inherited or passed variables. The local variables are denoted with this. Or specifically the members of class only.",
  },
  {
    id: 314,
    Question: "How many objects can be referenced from the same variables?",
    Options: [
      "a) One at a time",
      "b) Many at a time",
      "c) Many using array name",
      "d) 7 at max at same time",
    ],
    Answer:
      "Answer: d\nExplanation: This depends on where the method is being called. If the method is called inside the enclosing class itself. Then we can’t use object of enclosing class. If the method is being called within the inner class itself, then its object will also be of no use.",
  },
  {
    id: 315,
    Question: "Which among the following is true?",
    Options: [
      "a) Object referencing refers to methods address",
      "b) Object referencing refers to variable of object",
      "c) Object referencing points to same address, if assigned by variables",
      "d) Object referencing is used to point methods",
    ],
    Answer:
      "Answer: a\nExplanation: There should not be any confusion in how many references can be made from a single variable. A single variable can only point to one object at a time. Even if it’s an array, the name of the array is used and is considered one object name only (representing first array element).",
  },
  {
    id: 316,
    Question:
      "Invoking a method on a particular object is ____________ sending a message to that object.",
    Options: [
      "a) Different from",
      "b) Same as",
      "c) Somewhat similar",
      "d) Part of",
    ],
    Answer:
      "Answer: a\nExplanation: In Java, it is inbuilt feature that handles all the memory dynamically. It is not necessary to free or destroy all the references made from a function which is going out of scope. You can call destroy or free methods explicitly but there is no mandatory rule.",
  },
  {
    id: 317,
    Question: "Can reference to an object be returned from a method?",
    Options: [
      "a) Yes, always possible",
      "b) Yes, but not always",
      "c) No, never possible",
      "d) No, Not possible because referred element would be destroyed",
    ],
    Answer:
      "Answer: c\nExplanation: The object referencing will point to the same address if variables are assigned. All the variables might have a different name but they will point to the same memory location. This is most basic concept of references.",
  },
  {
    id: 318,
    Question: "What does memory allocation for objects mean?",
    Options: [
      "a) Actual creation and memory allocation for object members",
      "b) Creation of member functions",
      "c) Creation of data members for a class",
      "d) Actual creation and data declaration for object members",
    ],
    Answer:
      "Answer: a\nExplanation: The memory allocated for the object members indicates actual creation of the object members. This is known as memory allocation for object.",
  },
  {
    id: 319,
    Question: "Where is the memory allocated for the objects?",
    Options: ["a) HDD", "b) Cache", "c) RAM", "d) ROM"],
    Answer:
      "Answer: c\nExplanation: The memory for the objects or any other data is allocated in RAM initially. This is while we run a program all the memory allocation takes place in some RAM segments. Arrays in heap and local members in stack etc.",
  },
  {
    id: 320,
    Question: "When is the memory allocated for an object?",
    Options: [
      "a) At declaration of object",
      "b) At compile time",
      "c) When object constructor is called",
      "d) When object is initialized to another object",
    ],
    Answer:
      "Answer: c\nExplanation: The object memory allocation takes place when the object constructor is called. Declaration of an object doesn’t mean that memory is allocated for its members. If object is initialized with another object, it may just get a reference to the previously created object.",
  },
  {
    id: 321,
    Question: "Using new is type safe as _______________________",
    Options: [
      "a) It require to be specified with type of data",
      "b) It doesn’t require to be specified with type of data",
      "c) It requires the name of data",
      "d) It allocated memory for the data",
    ],
    Answer:
      "Answer: b\nExplanation: The new is type safe because we don’t have to specify the type of data that have to be allocated with memory. We can directly use it with data name. Name of the data doesn’t matter though for type of memory allocation though.",
  },
  {
    id: 322,
    Question:
      "Which of the following function can be used for dynamic memory allocation of objects?",
    Options: [
      "a) malloc()",
      "b) calloc()",
      "c) create()",
      "d) malloc() and calloc()",
    ],
    Answer:
      "Answer: d\nExplanation: The malloc() function can be used to allocate dynamic memory for objects. Function calloc() can also be use. These functions differ in the way they allocate memory for objects.",
  },
  {
    id: 323,
    Question:
      '6. How much memory will be allocated for an object of class given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> Test\n<span class="br0">{</span>\n\t<span class="kw4">int</span> mark1<span class="sy4">;</span>\n\t<span class="kw4">int</span> mark2<span class="sy4">;</span>\n\t<span class="kw4">float</span> avg<span class="sy4">;</span>\n\t<span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">10</span><span class="br0">]</span><span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) 22 Bytes", "b) 24 Bytes", "c) 20 Bytes", "d) 18 Bytes"],
    Answer:
      "Answer: a\nExplanation: The size of an object of the class given in question will be of size 22 bytes. This is because the size of an object is always equal to the sum of sizes of the data members of the class, except static members.",
  },
  {
    id: 324,
    Question:
      "Which keyword among the following can be used to declare an array of objects in java?",
    Options: ["a) new", "b) create", "c) allocate", "d) arr"],
    Answer:
      "Answer: a\nExplanation: The keyword new can be used to declare an array of objects in java. The syntax must be specified with an object pointer which is assigned with a memory space containing the required number of object space. Even initialization can be done directly.",
  },
  {
    id: 325,
    Question: "When is the memory allocated for an object gets free?",
    Options: [
      "a) At termination of program",
      "b) When object goes out of scope",
      "c) When main function ends",
      "d) When system restarts",
    ],
    Answer:
      "Answer: b\nExplanation: Whenever an object goes out of scope, the deletion of allocation memory takes place. Actually the data is not deleted, instead the memory space is flagged to be free for further use. Hence whenever an object goes out of scope the object members become useless and hence memory is set free.",
  },
  {
    id: 326,
    Question:
      "Which among the following keyword can be used to free the allocated memory for an object?",
    Options: [
      "a) delete",
      "b) free",
      "c) either delete or free",
      "d) only delete",
    ],
    Answer:
      "Answer: c\nExplanation: The memory allocated for an object is usually automatically made free. But if explicitly memory has to be made free then we can use either free or delete keywords depending on programming languages.",
  },
  {
    id: 327,
    Question: "Which function is called whenever an object goes out of scope?",
    Options: [
      "a) Destructor function",
      "b) Constructor function",
      "c) Delete function",
      "d) Free function",
    ],
    Answer:
      "Answer: a\nExplanation: The destructor function of the class is called whenever an object goes out of scope. This is because the destructor set all the resources, acquired by the object, free. This is an implicit work of compiler.",
  },
  {
    id: 328,
    Question: "Which operator can be used to check the size of an object?",
    Options: [
      "a) sizeof(objectName)",
      "b) size(objectName)",
      "c) sizeofobject(objectName)",
      "d) sizedobject(objectName)",
    ],
    Answer:
      "Answer: a\nExplanation: The sizeof operator is used to get the size of an already created object. This operator must constail keyword sizeof(objectName). The output will give the number of bytes acquired by a single object of some class.",
  },
  {
    id: 329,
    Question: "The memory allocated for an object ____________________",
    Options: [
      "a) Can be only dynamic",
      "b) Can be only static",
      "c) Can be static or dynamic",
      "d) Can’t be done using dynamic functions",
    ],
    Answer:
      "Answer: c\nExplanation: The memory allocation for an object can be static or dynamic. The static memory allocation is when an object is declared directly without using any function usually. And dynamic allocation is when we use some dynamic allocation function to allocate memory for data member of an object.",
  },
  {
    id: 330,
    Question:
      "If an object is declared in a user defined function __________________",
    Options: [
      "a) Its memory is allocated in stack",
      "b) Its memory is allocated in heap",
      "c) Its memory is allocated in HDD",
      "d) Its memory is allocated in cache",
    ],
    Answer:
      "Answer: a\nExplanation: The memory for any data or object that are used in a user defined function are always allocated in the stack. This is to ensure that the object is destroyed as soon as the function is returned. Also this ensures that the correct memory allocation and destruction is performed.",
  },
  {
    id: 331,
    Question:
      "In java, ____________________ takes care of managing memory for objects dynamically.",
    Options: [
      "a) Free collector",
      "b) Dust collector",
      "c) Memory manager",
      "d) Garbage collector",
    ],
    Answer:
      "Answer: d\nExplanation: The garbage collector in java takes care of the memory allocations and their deletions dynamically. When an object is no more required then the garbage collector deletes the object and free up all the resources that were held by that object.",
  },
  {
    id: 332,
    Question:
      "Which operator can be used to free the memory allocated for an object in C++?",
    Options: ["a) Free()", "b) delete", "c) Unallocate", "d) Collect"],
    Answer:
      "Answer: b\nExplanation: The delete operator in C++ can be used to free the memory and resources held by an object. The function can be called explicitly whenever required. In C++ memory management must be done by the programmer. There is no automatic memory management in C++.",
  },
  {
    id: 333,
    Question: "What is an array of objects?",
    Options: [
      "a) An array of instances of class represented by single name",
      "b) An array of instances of class represented by more than one name",
      "c) An array of instances which have more than 2 instances",
      "d) An array of instances which have different types",
    ],
    Answer:
      "Answer: a\nExplanation: The array of objects an array of instances of a class. The array is represented by a single name. The array name is itself a pointer. Array name represents the first object.",
  },
  {
    id: 334,
    Question:
      "Which among the following is a mandatory condition for array of objects?",
    Options: [
      "a) All the objects should be of different class",
      "b) All the objects should be of same program classes",
      "c) All the objects should be of same class",
      "d) All the objects should have different data",
    ],
    Answer:
      "Answer: c\nExplanation: The objects of an array must be of same class. This is mandatory because array is set of same type of elements. The objects of same class are considered to be of same type.",
  },
  {
    id: 335,
    Question: "What is the type of elements of array of objects?",
    Options: ["a) Class", "b) Void", "c) String", "d) Null"],
    Answer:
      "Answer: a\nExplanation: The class itself is the type of elements of array of objects. All the objects possess the same properties. Like any other primitive data type, the objects are of their respective class type.",
  },
  {
    id: 336,
    Options: [
      "a) The objects will have same values",
      "b) The objects will not be initialized individually",
      "c) The objects can never be initialized",
      "d) The objects will have same data",
    ],
    Answer:
      "Answer: b\nExplanation: If the syntax given, is used to declare the array of objects, then the objects can’t be initialized individually. All the objects will have to be initialized after this declaration.",
  },
  {
    id: 337,
    Question:
      "Which is the condition that must be followed if the array of objects is declared without initialization, only with size of array?",
    Options: [
      "a) The class should have separate constructor for each object",
      "b) The class must have no constructors",
      "c) The class should not have any member function",
      "d) The class must have a default or zero argument constructor",
    ],
    Answer:
      "Answer: d\nExplanation: The class must have a default/zero argument constructor. Since the declaration is done by only specifying the size of array, the class must have default a construct to be called by default to reserve memory for each object. Also, we can’t specify the arguments in this type of declaration hence the class should provide a default initialization.",
  },
  {
    id: 338,
    Question:
      "When are the array of objects without any initialization useful?",
    Options: [
      "a) When object data is not required just after the declaration",
      "b) When initialization of object data is to be made by the compiler",
      "c) When object data doesn’t matter in the program",
      "d) When the object should contain garbage data",
    ],
    Answer:
      "Answer: a\nExplanation: Sometimes the object data is not mandatory to be used just after the declaration or may be the program requires the data to be updated according to what user inputs. Hence only declaration us also useful.",
  },
  {
    id: 339,
    Question:
      "If constructor arguments are passed to objects of array then ____________ if the constructors are overloaded.",
    Options: [
      "a) It is mandatory to pass same number of arguments to all the objects",
      "b) It is mandatory to pass same type of arguments to all the objects",
      "c) It is not mandatory to call same constructor for all the objects",
      "d) It is mandatory to call same constructor for all the constructors",
    ],
    Answer:
      "Answer: c\nExplanation: It is not mandatory to call the same constructor for all the objects in an array if initialized with the declaration. The objects can be passed with different set of arguments in the same syntax, separated by commas.",
  },
  {
    id: 340,
    Question: "How the objects of array can be denoted?",
    Options: ["a) Indices", "b) Name", "c) Random numbers", "d) Alphabets"],
    Answer:
      "Answer: a\nExplanation: Different objects in an array can be denoted with the indices of array. The first object is denoted by 0. And the further indices denote the next objects in sequence of array.",
  },
  {
    id: 341,
    Question: "The objects in an object array _______________________",
    Options: [
      "a) Can be created without use of constructor",
      "b) Can be created without calling default constructor",
      "c) Can’t be created with use of constructor",
      "d) Can’t be created without calling default constructor",
    ],
    Answer:
      "Answer: b\nExplanation: The objects need some constructor to get the memory spaced reserved for those. If the default constructor is not used then we can use some arguments constructor which will reserve the memory for the objects. The objects can be passed with constructor arguments during declaration.",
  },
  {
    id: 342,
    Question: "The Object array is created in _____________________",
    Options: ["a) Heap memory", "b) Stack memory", "c) HDD", "d) ROM"],
    Answer:
      "Answer: a\nExplanation: If the object arrays are declared dynamically, then the memory will be reserved on heap. The memory for objects will be on stack only if some constructor or some call and return tasks are happening. The program doesn’t run on HDD and ROM is not used for the execution of programs.",
  },
  {
    id: 343,
    Question:
      "If an array of objects is of size 10 and a data value have to be retrieved from 5th object then ________________ syntax should be used.",
    Options: [
      "a) Array_Name[4].data_variable_name;",
      "b) Data_Type Array_Name[4].data_variable_name;",
      "c) Array_Name[4].data_variable_name.value;",
      "d) Array_Name[4].data_variable_name(value);",
    ],
    Answer:
      "Answer: a\nExplanation: The array name with the index of fifth element is called, i.e. index 4. Then the dot operator is used to access the data member of that object. This Allows us to access the data members of all the objects in an object array.",
  },
  {
    id: 344,
    Question: "Can we have two dimensional object array?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if primitive type array",
      "c) No, since two indices are impossible",
      "d) No, never",
    ],
    Answer:
      "Answer: a\nExplanation: A two dimensional array can always be created. There is no rule that only primitive type objects can have more than one dimension. The object array can also be made 2 dimensional.",
  },
  {
    id: 345,
    Question: "From which index does the array of objects start?",
    Options: ["a) 0", "b) 1", "c) 2", "d) 3"],
    Answer:
      "Answer: a\nExplanation: The index must start from 0. The index ends at size – 1 index. This is because the index is always till n-1 where n is the total number of beads.",
  },
  {
    id: 346,
    Question: "Is an array of characters always a string?",
    Options: [
      "a) Yes, always",
      "b) Yes, if each character is terminated by null",
      "c) No, since each character is terminated by null",
      "d) No, never",
    ],
    Answer:
      "Answer: b\nExplanation: The two dimensional arrays can also be initialized using curly brackets. For each set, values in curly bracket. And then another bracket is added at first and end. This ensures that all the code belongs to the user.",
  },
  {
    id: 347,
    Question: "Which among the following is the main use of object?",
    Options: [
      "a) To create instance of a function",
      "b) To create instance of a program",
      "c) To create instance of class",
      "d) To create instance of structures",
    ],
    Answer:
      "Answer: c\nExplanation: The objects are used to create an instance of a class. Objects can represent a class in an independent form. The basic blueprint, that contains the information of the type of data that can be stored in an object, is given by the class.",
  },
  {
    id: 348,
    Question: "Which among the following is not a property of an object?",
    Options: ["a) Identity", "b) Properties", "c) Attributes", "d) Names"],
    Answer:
      "Answer: d\nExplanation: The names are not property of an object. The identity can be in any form like address or name of object but name can’t be termed as only identity of an object. The objects contain attributes that define what type of data an object can store.",
  },
  {
    id: 349,
    Question: "What is function object?",
    Options: [
      "a) An object with a single function",
      "b) An object with only functions",
      "c) An object with more than one function",
      "d) An object with no functions",
    ],
    Answer:
      "Answer: a\nExplanation: A function object is an object with single function. In C++ a function object can be like operator() function. This acts more like a function rather than an object.",
  },
  {
    id: 350,
    Question: "Immutable object are used ______________________",
    Options: [
      "a) To set up as a fixed state",
      "b) To set up variable object",
      "c) To set up an object of abstract class",
      "d) To set up an object of derived class",
    ],
    Answer:
      "Answer: a\nExplanation: An immutable object can be created for an object which has to be fixed with values. The object data will not be changed throughout the program. This can be useful to eliminate the unintentional changes in the data of object.",
  },
  {
    id: 351,
    Question: "Which object can be used to contain other objects?",
    Options: [
      "a) First class object",
      "b) Derived class object",
      "c) Container object",
      "d) Enclosure object",
    ],
    Answer:
      "Answer: c\nExplanation: A container object can be used to contain other objects. Container object is an ADT. Its object are collection of other objects. Some specific rules apply to these types of objects.",
  },
  {
    id: 352,
    Question: "A factory object is used ______________________",
    Options: [
      "a) To create new classes",
      "b) To create new function",
      "c) To create new data members",
      "d) To create new objects",
    ],
    Answer:
      "Answer:d\nExplanation: The factory object is an object that can be used to create other objects. If it is seen formally, it behaves like a method that will return object on its use. The object returned is assumed to be a new object.",
  },
  {
    id: 353,
    Question: "What are singleton objects?",
    Options: [
      "a) The only two objects of a class throughout the program",
      "b) The only object of a class throughout the program",
      "c) The objects that are alive throughout the program",
      "d) The objects that are created and then deleted without use",
    ],
    Answer:
      "Answer: b\nExplanation: If a class has only one object created and that is the only object of the class. Then the object is known as the singleton object. But only if that object is the only object of the class and no other object is created for that class.",
  },
  {
    id: 354,
    Question: "Object cout and cin _________________",
    Options: [
      "a) Can be used directly with << and >> symbols respectively",
      "b) Can be used directly with >> and << symbols respectively",
      "c) Must be used as a function which accepts 2 arguments",
      "d) Must be used as a function which accepts 3 arguments",
    ],
    Answer:
      "Answer: a\nExplanation: The cin and cout objects can be used directly with the >> and << operators respectively. The objects are of iostream class. Class iostream is an inbuilt class.",
  },
  {
    id: 355,
    Question: "Objects type ____________________",
    Options: [
      "a) Can be changed in runtime",
      "b) Can’t be changed in runtime",
      "c) Can be changed in compile time",
      "d) May or may not get changed",
    ],
    Answer:
      "Answer: b\nExplanation: The object types are always fixed. Once the object is created of a specific type then it can’t be changed. Neither at runtime nor at compile time.",
  },
  {
    id: 356,
    Question: "An object can be used to represent _________________",
    Options: [
      "a) A real world entity",
      "b) A real function",
      "c) Some real data only",
      "d) Some function only",
    ],
    Answer:
      "Answer: a\nExplanation: The objects are actually meant to represent an entity. The classes are real world object’s blueprint. The classes then are used to create an entity representation.",
  },
  {
    id: 357,
    Question: "Objects can be used _____________________",
    Options: [
      "a) To access any member of a class",
      "b) To access only public members of a class",
      "c) To access only protected members of a class",
      "d) To access only private members of a class",
    ],
    Answer:
      "Answer: b\nExplanation: The objects are created for a specific class. Then the objects can be used to access the public members of a class. The members can be the data members or the member functions of the class.",
  },
  {
    id: 358,
    Question: "Which among the following is not a use of object?",
    Options: [
      "a) Defining a member function",
      "b) Accessing data members",
      "c) Creating instance of a class",
      "d) Using class members",
    ],
    Answer:
      "Answer: a\nExplanation: The objects can’t be used to define any member function. Member functions must be defined by the class only. Objects can only access the members and use them.",
  },
  {
    id: 359,
    Question: "Which object can be used to access the standard input?",
    Options: [
      "a) System.inner",
      "b) cin",
      "c) System.stdin",
      "d) console.input",
    ],
    Answer:
      "Answer: b\nExplanation: Object cin can be used to take input from the standard input. It is used in C++. In java we can use System.in for the standard input stream. The syntax changes from language to language.",
  },
  {
    id: 360,
    Question: "A single object can be used __________________",
    Options: [
      "a) As only two class types at a time",
      "b) As only three class types at a time",
      "c) As only one class type at a time",
      "d) As of as many class types as required",
    ],
    Answer:
      "Answer: c\nExplanation: The object can be of only one type. The type of an object can’t be changed. Object type is mandatory to be of one class type to ensure the type and number of data members it have.",
  },
  {
    id: 361,
    Question:
      "If same object name is given to different objects of different class then _____________",
    Options: [
      "a) Its compile time error",
      "b) Its runtime error",
      "c) It’s not an error",
      "d) Program suns smooth",
    ],
    Answer:
      "Answer: a\nExplanation: It is a compile time error as the compiler doesn’t allow the same name objects to be declared more than once. Compiler produces multiple declaration errors. Every object must have a different name.",
  },
  {
    id: 362,
    Question: "Which among the following best describes abstract classes?",
    Options: [
      "a) If a class has more than one virtual function, it’s abstract class",
      "b) If a class have only one pure virtual function, it’s abstract class",
      "c) If a class has at least one pure virtual function, it’s abstract class",
      "d) If a class has all the pure virtual functions only, then it’s abstract class",
    ],
    Answer:
      "Answer: c\nExplanation: The condition for a class to be called abstract class is that it must have at least one pure virtual function. The keyword abstract must be used while defining abstract class in java.",
  },
  {
    id: 363,
    Question: "Can abstract class have main() function defined inside it?",
    Options: [
      "a) Yes, depending on return type of main()",
      "b) Yes, always",
      "c) No, main must not be defined inside abstract class",
      "d) No, because main() is not abstract function",
    ],
    Answer:
      "Answer: b\nExplanation: This is a property of abstract class. It can define main() function inside it. There is no restriction on its definition and implementation.",
  },
  {
    id: 364,
    Question:
      "If there is an abstract method in a class then, ________________",
    Options: [
      "a) Class must be abstract class",
      "b) Class may or may not be abstract class",
      "c) Class is generic",
      "d) Class must be public",
    ],
    Answer:
      "Answer: a\nExplanation: It is a rule that if a class have even one abstract method, it must be an abstract class. If this rule was not made, the abstract methods would have got skipped to get defined in some places which are undesirable with the idea of abstract class.",
  },
  {
    id: 365,
    Question:
      "If a class is extending/inheriting another abstract class having abstract method, then _______________________",
    Options: [
      "a) Either implementation of method or making class abstract is mandatory",
      "b) Implementation of the method in derived class is mandatory",
      "c) Making the derived class also abstract is mandatory",
      "d) It’s not mandatory to implement the abstract method of parent class",
    ],
    Answer:
      "Answer: a\nExplanation: Either of the two things must be done, either implementation or declaration of class as abstract. This is done to ensure that the method intended to be defined by other classes gets defined at every possible class.",
  },
  {
    id: 366,
    Question:
      "Abstract class A has 4 virtual functions. Abstract class B defines only 2 of those member functions as it extends class A. Class C extends class B and implements the other two member functions of class A. Choose the correct option below.",
    Options: [
      "a) Program won’t run as all the methods are not defined by B",
      "b) Program won’t run as C is not inheriting A directly",
      "c) Program won’t run as multiple inheritance is used",
      "d) Program runs correctly",
    ],
    Answer:
      "Answer: d\nExplanation: The program runs correctly. This is because even class B is abstract so it’s not mandatory to define all the virtual functions. Class C is not abstract but all the virtual functions have been implemented will that class.",
  },
  {
    id: 367,
    Question: "Abstract classes can ____________________ instances.",
    Options: [
      "a) Never have",
      "b) Always have",
      "c) Have array of",
      "d) Have pointer of",
    ],
    Answer:
      "Answer: a\nExplanation: When an abstract class is defined, it won’t be having the implementation of at least one function. This will restrict the class to have any constructor. When the class doesn’t have constructor, there won’t be any instance of that class.",
  },
  {
    id: 368,
    Question: "We ___________________ to an abstract class.",
    Options: [
      "a) Can create pointers",
      "b) Can create references",
      "c) Can create pointers or references",
      "d) Can’t create any reference, pointer or instance",
    ],
    Answer:
      "Answer: c\nExplanation: Even though there can’t be any instance of abstract class. We can always create pointer or reference to abstract class. The member functions which have some implementation inside abstract itself can be used with these references.",
  },
  {
    id: 369,
    Question:
      "Which among the following is an important use of abstract classes?",
    Options: [
      "a) Header files",
      "b) Class Libraries",
      "c) Class definitions",
      "d) Class inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: The abstract classes can be used to create a generic, extensible class library that can be used by other programmers. This helps us to get some already implemented codes and functions that might have not been provided by the programming language itself.",
  },
  {
    id: 370,
    Question:
      "Use of pointers or reference to an abstract class gives rise to which among the following feature?",
    Options: [
      "a) Static Polymorphism",
      "b) Runtime polymorphism",
      "c) Compile time Polymorphism",
      "d) Polymorphism within methods",
    ],
    Answer:
      "Answer: b\nExplanation: The runtime polymorphism is supported by reference and pointer to an abstract class. This relies upon base class pointer and reference to select the proper virtual function.",
  },
  {
    id: 371,
    Question: "The abstract classes in java can _________________",
    Options: [
      "a) Implement constructors",
      "b) Can’t implement constructor",
      "c) Can implement only unimplemented methods",
      "d) Can’t implement any type of constructor",
    ],
    Answer:
      "Answer: a\nExplanation: The abstract classes in java can define a constructor. Even though instance can’t be created. But in this way, only during constructor chaining, constructor can be called. When instance of concrete implementation class is created, it’s known as constructor chaining.",
  },
  {
    id: 372,
    Question: "Can abstract classes have static methods (Java)?",
    Options: [
      "a) Yes, always",
      "b) Yes, but depends on code",
      "c) No, never",
      "d) No, static members can’t have different values",
    ],
    Answer:
      "Answer: a\nExplanation: If an abstract class is made final in java, it will stop the abstract class from being extended. And if the class is not getting extended, there won’t be another class to implement the virtual functions. Due to this contradicting fact, it can’t be final in java.",
  },
  {
    id: 373,
    Question: "It is _________________________ to have an abstract method.",
    Options: [
      "a) Not mandatory for an static class",
      "b) Not mandatory for a derived class",
      "c) Not mandatory for an abstract class",
      "d) Not mandatory for parent class",
    ],
    Answer:
      "Answer: a\nExplanation: There is no restriction on declaring static methods. The only condition is that the virtual functions must have some definition in the program. ",
  },
  {
    id: 374,
    Question: "How many abstract classes can a single program contain?",
    Options: [
      "a) At most 1",
      "b) At least 1",
      "c) At most 127",
      "d) As many as required",
    ],
    Answer:
      "Answer: c\nExplanation: Derived, parent and static classes can’t have abstract method (We can’t say what type of these classes is). And for abstract class it’s not mandatory to have abstract method. But if any abstract method is there inside a class, then class must be abstract type.",
  },
  {
    id: 375,
    Question:
      "Is it necessary that all the abstract methods must be defined from an abstract class?",
    Options: [
      "a) Yes, depending on code",
      "b) Yes, always",
      "c) No, never",
      "d) No, if function is not used, no definition is required",
    ],
    Answer:
      "Answer: d\nExplanation: There is no restriction on the number of abstract classes that can be defined inside a single program. The programs can use as many abstract classes as required. But the functions with no body must be implemented.",
  },
  {
    id: 376,
    Question: "A template class can have _____________",
    Options: [
      "a) More than one generic data type",
      "b) Only one generic data type",
      "c) At most two data types",
      "d) Only generic type of integers and not characters",
    ],
    Answer:
      "Answer: a\nExplanation: The template class can support more than one data type. The only thing is to add all the data types required in a list separated by comma within template specification.",
  },
  {
    id: 377,
    Question:
      "Which among the following is the proper syntax for the template class?",
    Options: [
      "a) template <typename T1, typename T2>;",
      "b) Template <typename T1, typename T2>;",
      "c) template <typename T> T named(T x, T y){  }",
      "d) Template <typename T1, typename T2> T1 named(T1 x, T2 y){  }",
    ],
    Answer:
      "Answer: c\nExplanation: The syntax must start with keyword template, case sensitive. Then it should include the typename and a variable to denote it. Then whenever that variable is used, it replaces it with the data type needed.",
  },
  {
    id: 378,
    Question: "Can default arguments be used with the template class?",
    Options: [
      "a) Yes, in some special cases",
      "b) Yes, always",
      "c) No, it must satisfy some specific conditions first",
      "d) No, it can’t be done",
    ],
    Answer:
      "Answer: b\nExplanation: The template class can use default arguments. This is used to specify the data type to be considered if it is not specified while passing to the generic class. The default type will be used.",
  },
  {
    id: 379,
    Question: "What is the syntax to use explicit class specialization?",
    Options: [
      "a) template <int> class myClass<>{  }",
      "b) template <int> class myClass<int>{  }",
      "c) template <> class myClass<>{  }",
      "d) template <> class myClass<int>{  }",
    ],
    Answer:
      "Answer: d\nExplanation: The class specialization is creation of explicit specialization of a generic class. We have to use template<> constructor for this to work. It works in the same way as with explicit function specialization.",
  },
  {
    id: 380,
    Question:
      "Which is the most significant feature that arises by using template classes?",
    Options: [
      "a) Code readability",
      "b) Ease in coding",
      "c) Code reusability",
      "d) Modularity in code",
    ],
    Answer:
      "Answer: c\nExplanation: The code reusability is the feature that becomes more powerful with the use of template classes. You can generate a single code that can be used in variety of programming situations.",
  },
  {
    id: 381,
    Question:
      "A template class defines the form of a class _____________________ it will operate.",
    Options: [
      "a) With full specification of the data on which",
      "b) With full specification of the functions on which",
      "c) Without full specification of the data on which",
      "d) Without full specification of the functions on which",
    ],
    Answer:
      "Answer: c\nExplanation: The template classes can accept all types of data types. There is no need to specify the data on which the class has to operate. Hence it gives us flexibility to code without worrying about the type of data that might be used in the code.",
  },
  {
    id: 382,
    Question:
      "What are the two specializations of I/O template classes in C++?",
    Options: [
      "a) 16-bit character and wide characters",
      "b) 8-bit character and wide characters",
      "c) 32-bit character and locale characters",
      "d) 64-bit characters and locale characters",
    ],
    Answer:
      "Answer: b\nExplanation: The I/O specialization is made with wide character and 8-bit characters. Wide characters are used to store the characters that might take more than 1 byte of space in memory or any size that is different from the one that the machine is using.",
  },
  {
    id: 383,
    Question:
      "Can typeid() function be used with the object of generic classes?",
    Options: [
      "a) Yes, only if default type is given",
      "b) Yes, always",
      "c) No, generic data can’t be determined",
      "d) No, never possible",
    ],
    Answer:
      "Answer: b\nExplanation: The typeid() function can be used with the objects of generic classes. An instance of a template class will take the type of data that is being used with it. Hence when typeid() function is used, the data type would have already been defined and hence we can get desired result from typeid() function.",
  },
  {
    id: 384,
    Question:
      "The _____________ class is a specialization of a more general template class.",
    Options: ["a) String", "b) Integer", "c) Digit", "d) Math"],
    Answer:
      "Answer: a\nExplanation: The string class is more specialized. Since the string must be able to store any kind of data that is given to the string. Hence it needs maximum specialization.",
  },
  {
    id: 385,
    Question: "How is function overloading different from template class?",
    Options: [
      "a) Overloading is multiple function doing same operation, Template is multiple function doing different operations",
      "b) Overloading is single function doing different operations, Template is multiple function doing different operations",
      "c) Overloading is multiple function doing similar operation, Template is multiple function doing identical operations",
      "d) Overloading is multiple function doing same operation, Template is same function doing different operations",
    ],
    Answer:
      "Answer: c\nExplanation: The function overloading is multiple functions with similar or different functionality but generic class functions perform the same task on given different types of data.",
  },
  {
    id: 386,
    Question: "What if static members are declared inside template classes?",
    Options: [
      "a) All instances will share the static variable",
      "b) All instances will have their own static variable",
      "c) All the instances will ignore the static variable",
      "d) Program gives compile time error",
    ],
    Answer:
      "Answer: b\nExplanation: The generic class have a special case with static members. Each instance will have its own static member. The static members are not shared usually.",
  },
  {
    id: 387,
    Question:
      "If template class is defined, is it necessary to use different types of data for each call?",
    Options: [
      "a) No, not necessary",
      "b) No, but at least two types must be there",
      "c) Yes, to make proper use of template",
      "d) Yes, for code efficiency",
    ],
    Answer:
      "Answer: c\nExplanation: For each new type, the class will have separate instance. Here two instances will be created and hence counter for integer goes to 1. And for float value, the count remains 0 for the output.",
  },
  {
    id: 388,
    Question:
      "How many generic types can be given inside a single template class?",
    Options: ["a) Only 1", "b) Only 3", "c) Only 7", "d) As many as required"],
    Answer:
      "Answer: a\nExplanation: It is not necessary to use different type with each call to the generic function. Data may be of same type with each call but still the function works. We don’t consider other properties like efficiency with this concept because it is made generic to all data type, hence always works.",
  },
  {
    id: 389,
    Question: "Which is most appropriate definition of a base class?",
    Options: [
      "a) It is parent of any of its derived class",
      "b) It is child of one of the parent class",
      "c) It is most basic class of whole program",
      "d) It is class with maximum number of members",
    ],
    Answer:
      "Answer: a\nExplanation: A class which is parent of another class, or from which other classes can be derived, is known as a base class. It is mandatory that a class must have at least one derived class to be called as a base class.",
  },
  {
    id: 390,
    Question: "A base class is also known as _____________ class.",
    Options: ["a) Basic", "b) Inherited", "c) Super", "d) Sub"],
    Answer:
      "Answer: c\nExplanation: A class which is being derived by other classes, is called as super class. This concept is clearly used in java as we call the functions of a base class by using the keyword super as required.",
  },
  {
    id: 391,
    Question: "An abstract class is always a __________ class.",
    Options: ["a) Base", "b) Derived", "c) Template", "d) Nested"],
    Answer:
      "Answer: a\nExplanation: Every abstract class is a base class. It must be so, because the functions which are not defined inside the abstract class, must be defined in the derived classes. Hence it becomes a base class.",
  },
  {
    id: 392,
    Question: "How many base classes can a single class inherit in java?",
    Options: ["a) 1", "b) 2", "c) 3", "d) As many as required"],
    Answer:
      "Answer: a\nExplanation: In java, multiple inheritance is not supported, which leads to the fact that a class can have only 1 parent class if inheritance is used. Only if interfaces are used then the class can implement more than one base class.",
  },
  {
    id: 393,
    Question: "How to make a derived class a base class?",
    Options: [
      "a) Change name of the class",
      "b) Use keyword base",
      "c) Make a class derive from it",
      "d) Can’t be done",
    ],
    Answer:
      "Answer: c\nExplanation: Making another class derive from it will make that class as base class. It is not necessary that we have to write different code for it. If at least one class derives that class, it becomes the base class for the new class.",
  },
  {
    id: 394,
    Question:
      "If a base class is being derived by two other classes, which inheritance will that be called?",
    Options: ["a) Single", "b) Multiple", "c) Multi-level", "d) Hierarchical"],
    Answer:
      "Answer: d\nExplanation: When more than one classes are being derived from a single parent class, the inheritance is known as hierarchical inheritance. This is usually useful when the base class is higher abstraction of its derived classes.",
  },
  {
    id: 395,
    Question: "Which among the following must be in a base class?",
    Options: [
      "a) Data members",
      "b) Member functions",
      "c) Access specifiers",
      "d) Nothing",
    ],
    Answer:
      "Answer: d\nExplanation: Even a class that doesn’t have any members can be a base class. It is not mandatory to have any member or attribute in base class.",
  },
  {
    id: 396,
    Question:
      "Which type of members can’t be accessed in derived classes of a base class?",
    Options: [
      "a) Protected",
      "b) Private",
      "c) Public",
      "d) All can be accessed",
    ],
    Answer:
      "Answer: b\nExplanation: The private members can be accessed only inside the base class. If the class is derived by other classes. Those members will not be accessible. This concept of OOP is made to make the members more secure.",
  },
  {
    id: 397,
    Question: "Base class have ________________ of abstraction.",
    Options: [
      "a) Higher degree",
      "b) Lower degree",
      "c) Intermediate",
      "d) Minimum degree",
    ],
    Answer:
      "Answer: b\nExplanation: When a class have more than one nested classes, it is known as enclosing class. It can’t be called as parent or base class since there is no inheritance involved.",
  },
  {
    id: 398,
    Question:
      "Always the base class constructors are called ___________ constructor of derived class.",
    Options: [
      "a) Before",
      "b) After",
      "c) Along",
      "d) According to priority of",
    ],
    Answer:
      "Answer: b\nExplanation: A base class will have lesser information as compared to those of derived classes. Since derived classes inherit the base class properties and then add on their own features, they elaborate more hence have lower degree of abstraction.",
  },
  {
    id: 399,
    Question:
      "Can we call methods of base class using the constructor of the derived class?",
    Options: [
      "a) Yes, always",
      "b) Yes, but not always",
      "c) No, never",
      "d) No, but we can call in some cases",
    ],
    Answer:
      "Answer: a\nExplanation: When the base class object is created, its constructor will be called for sure. But if a derived class constructor is called, first base class constructor is called and then derived class constructor is taken into consideration.",
  },
  {
    id: 400,
    Question:
      "If a base class is inherited from another class and then one class derives it, which inheritance is shown?",
    Options: ["a) Multiple", "b) Single", "c) Hierarchical", "d) Multi-level"],
    Answer:
      "Answer: a\nExplanation: If the function is defined in the base class, it can always be called from the constructor of its derived class. Since the constructors are not private, they can be accessed in derived class even if those are protected.",
  },
  {
    id: 401,
    Question: "How many base classes can a single derived class have in C++?",
    Options: ["a) 1", "b) 2", "c) 3", "d) As many as required"],
    Answer:
      "Answer: d\nExplanation: If a base class is inherited from another class, single inheritance is shown. But when one more class inherits the derived class, this becomes a multi-level inheritance.",
  },
  {
    id: 402,
    Question:
      "Which among the following is best definition of a derived class?",
    Options: [
      "a) A child class",
      "b) A class which inherits one or more classes",
      "c) A class with keyword derived",
      "d) A class with more than one constructor",
    ],
    Answer:
      "Answer: b\nExplanation: Any class which inherits one or more classes is a derived class. The only condition is it must inherit at least one class in order to be called as a derived class.",
  },
  {
    id: 403,
    Question:
      "Which among the following is inherited by a derived class from base class?",
    Options: [
      "a) Data members only",
      "b) Member functions only",
      "c) All the members except private members",
      "d) All the members of base class",
    ],
    Answer:
      "Answer: c\nExplanation: The class inheriting another class, inherits all the data members and member functions that are not private. This is done to ensure the security features with maximum flexibility.",
  },
  {
    id: 404,
    Question:
      "If there is a derived class in a program, how many classes must be in that program?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: b\nExplanation: If there is a derived class in a program, there must be at least 2 classes in that program. One is a base class and another derived class. Hence at least 2 classes must be there.",
  },
  {
    id: 405,
    Question:
      "Which members can never be accessed in derived class from the base class?",
    Options: [
      "a) Private",
      "b) Protected",
      "c) Public",
      "d) All except private",
    ],
    Answer:
      "Answer: d\nExplanation: There is no restriction for a derived class to access the members of the base class until and unless the members are private. Private member are declared so that those members are not accessible outside the class.",
  },
  {
    id: 406,
    Question:
      "How many types of inheritance are supported in C++ for deriving a class?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: c\nExplanation: There are three types of inheritance possible. Private inheritance, protected inheritance, and public inheritance. The inheritance defines the access specifier to be used with the inherited members in the derived class.",
  },
  {
    id: 407,
    Question: "How many derived class can a single base class have?",
    Options: ["a) 1", "b) 2", "c) 3", "d) As many are required"],
    Answer:
      "Answer: d\nExplanation: There is no restriction on how many classes can inherit a single base class. Hence there can be as many derived classes as required in a program from a single base class.",
  },
  {
    id: 408,
    Question: "Which among the following is correct?",
    Options: [
      "a) Friend function of derived class can access non-private members of base class",
      "b) Friend function of base class can access derived class members",
      "c) Friend function of derived class can access members of only derived class",
      "d) Friend function can access private members of base class of a derived class",
    ],
    Answer:
      "Answer: a\nExplanation: The friend function of a class can access the non-private members of base class. The reason behind is that the members of base class gets derived into the derived class and hence become members of derived class too. Hence a friend function can access all of those.",
  },
  {
    id: 409,
    Question:
      "If a class is being derived using more than two base classes, which inheritance will be used?",
    Options: ["a) Single", "b) Multi-level", "c) Hierarchical", "d) Multiple"],
    Answer:
      "Answer: d\nExplanation: The statement given is the definition of multiple inheritance with respect to the derived class. The concept can be illustrated with many other samples but the main aspects are base class and derived class only.",
  },
  {
    id: 410,
    Question: "Derived class is also known as ______________ class.",
    Options: [
      "a) Subclass",
      "b) Small class",
      "c) Big class",
      "d) Noticeable class",
    ],
    Answer:
      "Answer: a\nExplanation: It is just another name given to the derived classes. This is used while denoting all the derived classes subsequent to a superclass.",
  },
  {
    id: 411,
    Question:
      "If class A is derived from another derived class B which is derived from class C, which class will have maximum level of abstraction?",
    Options: [
      "a) Class A",
      "b) Class B",
      "c) Class C",
      "d) All have the same level of abstraction",
    ],
    Answer:
      "Answer: c\nExplanation: The abstraction level of class C will be maximum. This is because the parent class have higher level of abstraction. Hence the parent of all other class will have maximum level of abstraction.",
  },
  {
    id: 412,
    Question:
      "If base class is an abstract class then derived class ______________ the undefined functions.",
    Options: [
      "a) Must define",
      "b) Must become another abstract class or define",
      "c) Must become parent class for",
      "d) Must implement 2 definitions of",
    ],
    Answer:
      "Answer: b\nExplanation: The function must be defined in the program which are not defined in the base class. Hence the class must be defined as abstract of implement the function definition in it.",
  },
  {
    id: 413,
    Question: "How many classes can be derived from a derived class?",
    Options: [
      "a) Only 1",
      "b) At most 1",
      "c) At least 1",
      "d) As many as required",
    ],
    Answer:
      "Answer: d\nExplanation: When a class is to be derived from another derived class, the derived class behaves as a normal base class hence there are no restriction on how many class can be derived from a derived class. The derived class again behaves as a normal superclass.",
  },
  {
    id: 414,
    Question:
      "Which feature is not related to the derived classes among the following?",
    Options: [
      "a) Inheritance",
      "b) Encapsulation",
      "c) Run time memory management",
      "d) Compile time function references",
    ],
    Answer:
      "Answer: b\nExplanation: This is not true that the members of a derived class can’t be derived. All the classes are considered to be a normal class when used for derivation. The members can be derived with respect to their access specifiers.",
  },
  {
    id: 415,
    Question:
      "Deriving a class in such a way that that the base class members are not available for further inheritance is known as ___________________",
    Options: [
      "a) Public inheritance",
      "b) Protected inheritance",
      "c) Protected or private inheritance",
      "d) Private inheritance",
    ],
    Answer:
      "Answer: c\nExplanation: The memory management is the feature that is not necessary for derived classes that will be a part of whole program. The functions references must be resolved for their proper use if inheritance is used.",
  },
  {
    id: 416,
    Question: "Which among the following is the main characteristic of class?",
    Options: [
      "a) Inheritance",
      "b) Encapsulation",
      "c) Polymorphism",
      "d) Object creation",
    ],
    Answer:
      "Answer: b\nExplanation: The classes are made to encapsulate the data and properties that are most similar and can be grouped together inside a single class. This single class can represent all of those features by creating its instances.",
  },
  {
    id: 417,
    Question: "To group all the brands of cars, what should be used?",
    Options: ["a) Class", "b) Structure", "c) Function", "d) Object"],
    Answer:
      "Answer: a\nExplanation: A class can be used to group all the brands of cars. The Different brands may have different properties but all will have some common properties like number of wheels and doors, accessories etc. All of those properties can be grouped into a single class representing all the cars.",
  },
  {
    id: 418,
    Question:
      "If a class have two data members and two functions to add those two numbers and to subtract them, which among the following is most efficient if the programmer wants to implement multiplication too?",
    Options: [
      "a) Define a public function which multiplies two numbers",
      "b) Define a public function that returns values of two data members",
      "c) Define a private function which multiplies two numbers",
      "d) Define a private function that returns values of two data members",
    ],
    Answer:
      "Answer: b\nExplanation: The best choice would be to define a public member function that returns the values of two data members of the class. This way we can implement any operation on those data members. Also there won’t be any need to modify the program and to add new functions for each new operation.",
  },
  {
    id: 419,
    Question:
      "If a database have to be maintained using OOP, to store the details of each employee in a company, which would be the best choice among the following?",
    Options: [
      "a) Define a class to store details of each employee",
      "b) Define a structure to store details of each employee",
      "c) Define separate variable for each detail",
      "d) Define a generic type to store string and number details",
    ],
    Answer:
      "Answer: a\nExplanation: A single class can be defined that represents a single employee of a company. The specific type of functions that can be applied to specific employees can be put into another class that is derived from the existing class.",
  },
  {
    id: 420,
    Question: "Which class represents the most abstracted information?",
    Options: ["a) Nested", "b) Derived", "c) Enclosed", "d) Base"],
    Answer:
      "Answer: d\nExplanation: The base classes are the most abstracted part of information. A base class having many other derived classes would have a bigger overview of all the other derived classes. Hence the base classes have the most abstract information.",
  },
  {
    id: 421,
    Question:
      "Which among the following is an advantage of using classes over structures of C?",
    Options: [
      "a) Functions are restricted",
      "b) Functions can’t be defined",
      "c) Functions can also be encapsulated",
      "d) Functions can have more security",
    ],
    Answer:
      "Answer: c\nExplanation: The functions are also made easy to be encapsulated inside a class. In structures, only the data members were allowed to be encapsulated. Hence classes can represent an entity in a better way.",
  },
  {
    id: 422,
    Question: "Which among the following is a feature of class?",
    Options: [
      "a) Object orientation",
      "b) Procedure orientation",
      "c) Both object and procedure orientation",
      "d) Neither object nor procedure orientation",
    ],
    Answer:
      "Answer: a\nExplanation: Thee use of classes feature the object oriented programming. The OOP concept can be implemented by using class and their objects. Procedures orientation is not a feature of OOP.",
  },
  {
    id: 423,
    Question: "Class is _____________ of an object.",
    Options: [
      "a) Basic function definition",
      "b) Detailed description with values",
      "c) Blueprint",
      "d) Set of constant values",
    ],
    Answer:
      "Answer: c\nExplanation: The class is an overview for an object. It contains the basic details map of data that an object will contain. An object is independent representation of class.",
  },
  {
    id: 424,
    Question:
      "In which case the classes can be used to make the more efficient program?",
    Options: [
      "a) To define a function that is called frequently in a program",
      "b) To structure data that is most similar",
      "c) To group the most similar data and operations",
      "d) To define a blueprint that shows memory location of data",
    ],
    Answer:
      "Answer: c\nExplanation: The classes would be more suitable to use in case where we need to group the most similar data and operations. The data can be represented as data members of class and operations as member functions of class. This is indirectly encapsulation feature.",
  },
  {
    id: 425,
    Question: "What is the use of inbuilt classes?",
    Options: [
      "a) Provide predefined data",
      "b) Provide predefined functions",
      "c) Provide predefined data and functions",
      "d) Provide predeclared data to be overridden",
    ],
    Answer:
      "Answer: c\nExplanation: The data that is constant or is always the same initially for use can be provided by some inbuilt classes. The functions that are mostly used are also provided by the inbuilt classes. The data and functions can be used by including the corresponding header file or library.",
  },
  {
    id: 426,
    Question: "Which feature is exhibited by the inbuilt classes?",
    Options: [
      "a) Code reusability",
      "b) Code efficiency",
      "c) Code readability",
      "d) Code reusability, efficiency and readability",
    ],
    Answer:
      "Answer: d\nExplanation: The code is reusable as the functions which are already written, can be used anytime required. The code becomes easier to read. Also, the code is efficient as there is no need to assign any external code.",
  },
  {
    id: 427,
    Question: "Why do we use user defined classes?",
    Options: [
      "a) To design a user intended code",
      "b) To model real world objects",
      "c) To design the interfaces",
      "d) To model the functions",
    ],
    Answer:
      "Answer: b\nExplanation: The primitive classes are not sufficient for the programming complex algorithms. Some user defined classes are required to represent a real world object and to define a blueprint of what the class should actually contain. The user defined classes are as per the requirements and need of user.",
  },
  {
    id: 428,
    Question: "Why do classes use accessor methods?",
    Options: [
      "a) To make public data accessible to client",
      "b) To make public data private to client",
      "c) To make private data public for whole program",
      "d) To make private data accessible to the client",
    ],
    Answer:
      "Answer: d\nExplanation: The private data of a class is usually not accessible. But the data can be accessed by the user using accessor functions. These functions allows the user to get the data stored as private in a class.",
  },
  {
    id: 429,
    Question: "Why do classes use mutator methods?",
    Options: [
      "a) Allows client to modify the program",
      "b) Allows client to modify/write the private members",
      "c) Allows servers to access all the private data",
      "d) Allows servers to access only protected members",
    ],
    Answer:
      "Answer: b\nExplanation: The client can have rights to access a file and write something to it. This is mandatory to keep the private data updated. Also it is an advantage over the use of hidden class members.",
  },
  {
    id: 430,
    Question: "Which among the following is the most abstract form of class?",
    Options: ["a) Cars", "b) BMW cars", "c) Big cars", "d) Small cars"],
    Answer:
      "Answer: a\nExplanation: The most abstract class is class Cars. The class Cars is the most general form of all other cars. If it is a brand of car, it comes under car. If it is the type of car then also it comes under Cars.",
  },
  {
    id: 431,
    Question: "Which among the following best describes the Inheritance?",
    Options: [
      "a) Copying the code already written",
      "b) Using the code already written once",
      "c) Using already defined functions in programming language",
      "d) Using the data and functions into derived segment",
    ],
    Answer:
      "Answer: d\nExplanation: It can only be indicated by using the data and functions that we use in derived class, being provided by parent class. Copying code is nowhere similar to this concept, also using the code already written is same as copying. Using already defined functions is not inheritance as we are not adding any of our own features.",
  },
  {
    id: 432,
    Question:
      "How many basic types of inheritance are provided as OOP feature?",
    Options: ["a) 4", "b) 3", "c) 2", "d) 1"],
    Answer:
      "Answer: a\nExplanation: There are basically 4 types of inheritance provided in OOP, namely, single level, multilevel, multiple and hierarchical inheritance. We can add one more type as Hybrid inheritance but that is actually the combination any types of inheritance from the 4 basic ones.",
  },
  {
    id: 433,
    Question:
      "Which among the following best defines single level inheritance?",
    Options: [
      "a) A class inheriting a derived class",
      "b) A class inheriting a base class",
      "c) A class inheriting a nested class",
      "d) A class which gets inherited by 2 classes",
    ],
    Answer:
      "Answer: b\nExplanation: A class inheriting a base class defines single level inheritance. Inheriting an already derived class makes it multilevel inheritance. And if base class is inherited by 2 other classes, it is multiple inheritance.",
  },
  {
    id: 434,
    Question: "Which among the following is correct for multiple inheritance?",
    Options: [
      "a) class student{public:  int marks;}s;  class stream{int total;}; class topper:public student, public stream{  };",
      "b) class student{int marks;}; class stream{ }; class topper: public student{ };",
      "c) class student{int marks;}; class stream:public student{ };",
      "d) class student{ }; class stream{ }; class topper{ };",
    ],
    Answer:
      "Answer: a\nExplanation: Class topper is getting derived from 2 other classes and hence it is multiple inheritance. Topper inherits class stream and class student publicly and hence can use its features. If only few classes are defined, there we are not even using inheritance (as in option class student{ }; class stream{ }; class topper{ };).",
  },
  {
    id: 435,
    Question:
      "Which programming language doesn’t support multiple inheritance?",
    Options: [
      "a) C++ and Java",
      "b) C and C++",
      "c) Java and SmallTalk",
      "d) Java",
    ],
    Answer:
      "Answer: d\nExplanation: Java doesn’t support multiple inheritance. But that feature can be implemented by using the interfaces concept. Multiple inheritance is not supported because of diamond problem and similar issues.",
  },
  {
    id: 436,
    Question:
      "Which among the following is correct for a hierarchical inheritance?",
    Options: [
      "a) Two base classes can be used to be derived into one single class",
      "b) Two or more classes can be derived into one class",
      "c) One base class can be derived into other two derived classes or more",
      "d) One base class can be derived into only 2 classes",
    ],
    Answer:
      "Answer: c\nExplanation: One base class can be derived into the other two derived classes or more. If only one class gets derived by only 2 other classes, it is also hierarchical inheritance, but it is not a mandatory condition, because any number of derived classes can be there.",
  },
  {
    id: 437,
    Question: "Which is the correct syntax of inheritance?",
    Options: [
      "a) class derived_classname : base_classname{ /*define class body*/ };",
      "b) class base_classname : derived_classname{ /*define class body*/ };",
      "c) class derived_classname : access base_classname{ /*define class body*/ };",
      "d) class base_classname :access derived_classname{ /*define class body*/ };",
    ],
    Answer:
      "Answer: c\nExplanation: Firstly, keyword class should come, followed by the derived class name. Colon is must followed by access in which base class has to be derived, followed by the base class name. And finally the body of class. Semicolon after the body is also must.",
  },
  {
    id: 438,
    Question: "Which type of inheritance leads to diamond problem?",
    Options: [
      "a) Single level",
      "b) Multi-level",
      "c) Multiple",
      "d) Hierarchical",
    ],
    Answer:
      "Answer: c\nExplanation: When 2 or more classes inherit the same class using multiple inheritance and then one more class inherits those two base classes, we get a diamond like structure. Here, ambiguity arises when same function gets derived into 2 base classes and finally to 3rd level class because same name functions are being inherited.",
  },
  {
    id: 439,
    Question:
      "Which access type data gets derived as private member in derived class?",
    Options: [
      "a) Private",
      "b) Public",
      "c) Protected",
      "d) Protected and Private",
    ],
    Answer:
      "Answer: a\nExplanation: It is a rule, that when a derived class inherits the base class in private access mode, all the members of base class gets derived as private members of the derived class. ",
  },
  {
    id: 440,
    Question:
      "If a base class is inherited in protected access mode then which among the following is true?",
    Options: [
      "a) Public and Protected members of base class becomes protected members of derived class",
      "b) Only protected members become protected members of derived class",
      "c) Private, Protected and Public all members of base, become private of derived class",
      "d) Only private members of base, become private of derived class",
    ],
    Answer:
      "Answer: a\nExplanation: As the programming language rules apply, all the public and protected members of base class becomes protected members of derived class in protected access mode. It can’t be changed because it would hinder the security of data and may add vulnerability in the program.",
  },
  {
    id: 441,
    Question:
      "Members which are not intended to be inherited are declared as ________________",
    Options: [
      "a) Public members",
      "b) Protected members",
      "c) Private members",
      "d) Private or Protected members",
    ],
    Answer:
      "Answer: c\nExplanation: Private access specifier is the most secure access mode. It doesn’t allow members to be inherited. Even Private inheritance can only inherit protected and public members.",
  },
  {
    id: 442,
    Question:
      "While inheriting a class, if no access mode is specified, then which among the following is true? (in C++)",
    Options: [
      "a) It gets inherited publicly by default",
      "b) It gets inherited protected by default",
      "c) It gets inherited privately by default",
      "d) It is not possible",
    ],
    Answer:
      "Answer: c\nExplanation: If the access mode is not specified during inheritance, the class is inherited privately by default. This is to ensure the security of data and to maintain OOP features. Hence it is not mandatory to specify the access mode if we want the class to be inherited privately.",
  },
  {
    id: 443,
    Question:
      "If a derived class object is created, which constructor is called first?",
    Options: [
      "a) Base class constructor",
      "b) Derived class constructor",
      "c) Depends on how we call the object",
      "d) Not possible",
    ],
    Answer:
      "Answer: a\nExplanation: First the base class constructor is invoked. When we create a derived class object, the system tries to invoke its constructor but the class is derived so first the base class must be initialized, hence in turn the base class constructor is invoked before the derived class constructor.",
  },
  {
    id: 444,
    Question: "How can you make the private members inheritable?",
    Options: [
      "a) By making their visibility mode as public only",
      "b) By making their visibility mode as protected only",
      "c) By making their visibility mode as private in derived class",
      "d) It can be done both by making the visibility mode public or protected",
    ],
    Answer:
      "Answer: a\nExplanation: Consider that a variable is private in base class and the derived class uses public inheritance to inherit that class. Now if we also have a global variable of same name as that of base class private variable, neither the global variable nor the base class private variable will be accessible from derived class. This is because we can’t have 2 variables with same name in same local scope. Hence the private members are accessible but not directly.",
  },
  {
    id: 445,
    Question: "How many types of inheritance are possible in C++?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: d\nExplanation: There are five types of inheritance that are possible in C++. Single level, Multilevel, multiple, hierarchical and hybrid. Here we count hybrid also because it sometimes can bring up a new form of inheritance, Like inheritance using multiple and hierarchical, which sometimes results in diamond problem.",
  },
  {
    id: 446,
    Question: "Which among the following is true?",
    Options: [
      "a) Java supports all types of inheritance",
      "b) Java supports multiple inheritance",
      "c) Java doesn’t support multiple inheritance",
      "d) Java doesn’t support inheritance",
    ],
    Answer:
      "Answer: c\nExplanation: Java doesn’t support multiple inheritance. This is done to avoid the diamond problem that sometimes arises with inherited functions. Though, multiple inheritance can be implemented in java using interfaces.",
  },
  {
    id: 447,
    Question:
      '3. Which type of inheritance is illustrated by the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> student<span class="br0">{</span> <span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">int</span> marks<span class="sy4">;</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> topper<span class="sy4">:</span> <span class="kw2">public</span> student <span class="br0">{</span> <span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">char</span> grade<span class="sy4">;</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> average<span class="br0">{</span> <span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">int</span> makrs_needed<span class="sy4">;</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> section<span class="sy4">:</span> <span class="kw2">public</span> average<span class="br0">{</span> <span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">10</span><span class="br0">]</span><span class="sy4">;</span>  <span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> overall<span class="sy4">:</span> <span class="kw2">public</span> average<span class="br0">{</span>  <span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">int</span> students<span class="sy4">;</span>  <span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Single level",
      "b) Multilevel and single level",
      "c) Hierarchical",
      "d) Hierarchical and single level",
    ],
    Answer:
      "Answer: d\nExplanation: It is hierarchical inheritance and single level inheritance. Since class topper is inheriting class student, it is single level inheritance. And then average is inherited by section and overall, so it is hierarchical inheritance. But both of them are separate. Hence it is not hybrid inheritance.",
  },
  {
    id: 448,
    Question: "Which among the following best describes multiple inheritance?",
    Options: [
      "a) Two classes being parent of any other classes",
      "b) Three classes being parent of other classes",
      "c) More than one class being parent of other child classes",
      "d) More than one class being parent of single child",
    ],
    Answer:
      "Answer: d\nExplanation: If a class inherits more than one class, it is known as multiple inheritance. This should not be referred with only two or three classes being inherited. But there must be one class which inherits more than one class to be called as multiple inheritance.",
  },
  {
    id: 449,
    Question:
      "How many types of inheritance can be used at a time in a single program?",
    Options: [
      "a) Any two types",
      "b) Any three types",
      "c) Any 4 types",
      "d) Any type, any number of times",
    ],
    Answer:
      "Answer: d\nExplanation: Any type of inheritance can be used in any program. There is no rule to use only few types of inheritance. Only thing that matters is how the classes are inherited and used.",
  },
  {
    id: 450,
    Question: "Which type of inheritance results in the diamond problem?",
    Options: [
      "a) Single level",
      "b) Hybrid",
      "c) Hierarchical",
      "d) Multilevel",
    ],
    Answer:
      "Answer: b\nExplanation: In diamond problem, hierarchical inheritance is used first, where two different classes inherit the same class and then in turn a 4th class inherits the two classes which had inherited the first class. Using more than one type of inheritance here, it is known as hybrid inheritance.",
  },
  {
    id: 451,
    Question:
      "If 6 classes uses single level inheritance with pair classes (3 pairs), which inheritance will this be called?",
    Options: ["a) Single", "b) Multiple", "c) Hierarchical", "d) Multilevel"],
    Answer:
      "Answer: a\nExplanation: Here all the pairs are using single inheritance. And no different pairs are inheriting same classes. Hence it can’t be called hybrid or multilevel inheritance. You can say the single inheritance is used 3 times in that program.",
  },
  {
    id: 452,
    Question:
      '8. Which among the following is correct for the following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>  \n    <span class="kw2">public</span> <span class="sy4">:</span> <span class="kw2">class</span> B \n    <span class="br0">{</span> \n        <span class="kw2">public</span> <span class="sy4">:</span> B<span class="br0">(</span><span class="kw4">int</span> i<span class="br0">)</span><span class="sy4">:</span> data<span class="br0">(</span>i<span class="br0">)</span>\n        <span class="br0">{</span> \n        <span class="br0">}</span>\n        <span class="kw4">int</span> data<span class="sy4">;</span>\n    <span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span> <span class="kw2">public</span> A\n<span class="br0">{</span>\n     <span class="kw2">class</span> D<span class="sy4">:</span><span class="kw2">public</span> A<span class="sy4">::</span><span class="me2">B</span><span class="br0">{</span> <span class="br0">}</span><span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Multi-level inheritance is used, with nested classes",
      "b) Multiple inheritance is used, with nested classes",
      "c) Single level inheritance is used, with enclosing classes",
      "d) Single level inheritance is used, with both enclosing and nested classes",
    ],
    Answer:
      "Answer: d\nExplanation: Class C is inheriting Class A. Class D is inheriting class B, both are nested. Hence it is single inheritance. For multiple inheritance, class C or D should have inherited both class A and class B.",
  },
  {
    id: 453,
    Question: "Which among the following is false?",
    Options: [
      "a) If one class inherits the inherited class in single level inheritance, it is multi-level inheritance",
      "b) Hybrid inheritance always contains multiple inheritance",
      "c) Hierarchical inheritance involves inheriting same class into more than one classes",
      "d) Hybrid inheritance can involve any types of inheritance together",
    ],
    Answer:
      "Answer: b\nExplanation: It is not necessary to have multiple inheritance in hybrid type. It can have any type together. This doesn’t have to be of specific type always.",
  },
  {
    id: 454,
    Question:
      "If class A has two nested classes B and C. Class D has one nested class E, and have inherited class A. If E inherits B and C, then ________________",
    Options: [
      "a) It shows multiple inheritance",
      "b) It shows hierarchical inheritance",
      "c) It shows multiple inheritance",
      "d) Multiple inheritance among nested classes, and single level for enclosing classes",
    ],
    Answer:
      "Answer: d\nExplanation: This involves the same concept of inheritance, where the nested classes also follow the inheritance rules. The Enclosing classes are having single inheritance. Nested classes involves multiple.",
  },
  {
    id: 455,
    Question: "Which type of inheritance cannot involve private inheritance?",
    Options: [
      "a) Single level",
      "b) Multiple",
      "c) Hybrid",
      "d) All types can have private inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: This is so because few classes might not be involved in any type of inheritance in whole program whereas other classes might be participating in more than one type of inheritance at the same time.",
  },
  {
    id: 456,
    Question:
      "How many classes can be inherited by a single class in multiple inheritance (C++)?",
    Options: [
      "a) Only 2",
      "b) Only 27",
      "c) Only 1024",
      "d) Any number of classes can be inherited",
    ],
    Answer:
      "Answer: d\nExplanation: This is a common type of inheritance where the protected and public members of parent class become private members in child class. There is no type which doesn’t support private inheritance.",
  },
  {
    id: 457,
    Question: "How many classes can be inherited by a single class in java?",
    Options: ["a) Only 1", "b) Only 27", "c) Only 255", "d) Only 1024"],
    Answer:
      "Answer: d\nExplanation: Any class can inherit any number of classes. There is no limit defined for the number of classes being inherited by a single class.",
  },
  {
    id: 458,
    Question:
      "If multi-level inheritance is used, First class B inherits class A, then C inherits B and so on. Till how many classes can this go on?",
    Options: [
      "a) Only till class C",
      "b) Only till class J",
      "c) Only till class Z",
      "d) There is no limit",
    ],
    Answer:
      "Answer: a\nExplanation: Since java doesn’t support multiple inheritance, it is not possible for a class to inherit more than 1 class in java. This is the same case in C# also.",
  },
  {
    id: 459,
    Question: "Which among the following defines single level inheritance?",
    Options: [
      "a) One base class derives another class",
      "b) One derived class inherits from one base class",
      "c) One base class inherits from one derived class",
      "d) One derived class derives from another derived class",
    ],
    Answer:
      "Answer: b\nExplanation: If only one base class is used to derive only one subclass, it is known as single level inheritance. The reason of this name is that we inherit the base class to one more level and stop the inheritance any further.",
  },
  {
    id: 460,
    Question:
      "If class A and class B are derived from class C and class D, then ________________",
    Options: [
      "a) Those are 2 pairs of single inheritance",
      "b) That is multilevel inheritance",
      "c) Those is enclosing class",
      "d) Those are all independent classes",
    ],
    Answer:
      "Answer: a\nExplanation: Since class A is derived from class C and then class B is derived from class D, there are two pairs of classes which shows single inheritance. Those two pairs are independent of each other though.",
  },
  {
    id: 461,
    Question:
      "If single inheritance is used, program will contain ________________",
    Options: [
      "a) At least 2 classes",
      "b) At most 2 classes",
      "c) Exactly 2 classes",
      "d) At most 4 classes",
    ],
    Answer:
      "Answer: a\nExplanation: The program will contain at least 2 classes in the sense of base and derived classes. At least one base class and one derived class must be there. Types of inheritance remains the same though.",
  },
  {
    id: 462,
    Question: "Single level inheritance supports _____________ inheritance.",
    Options: [
      "a) Runtime",
      "b) Compile time",
      "c) Multiple inheritance",
      "d) Language independency",
    ],
    Answer:
      "Answer: a\nExplanation: The runtime inheritance is done when object of a class is created to call a method. At runtime the function is searched if it is in class of object. If not, it will search in its parent classes and hierarchy for that method.",
  },
  {
    id: 463,
    Question:
      '5. Which method in the code below is single level inherited?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">protected</span> <span class="kw4">int</span> a, b<span class="sy4">;</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">void</span> show<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>a<span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>b<span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span> <span class="kw2">public</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>a<span class="sy2">++</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>b<span class="sy2">++</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span> <span class="kw2">private</span> A, <span class="kw2">public</span> B\n<span class="br0">{</span>\n\t<span class="kw4">void</span> avg<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="br0">(</span>a<span class="sy2">+</span>b<span class="br0">)</span><span class="sy2">/</span><span class="nu0">2</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) Class A", "b) Class B", "c) Class C", "d) None"],
    Answer:
      "Answer: b\nExplanation: Class B is using single level inheritance. Class C is using multiple inheritance. And class A is parent of other two classes.",
  },
  {
    id: 464,
    Question:
      "If single level inheritance is used and an abstract class is created with some undefined functions, can its derived class also skip some definitions?",
    Options: [
      "a) Yes, always possible",
      "b) Yes, possible if only one undefined function",
      "c) No, at least 2 undefined functions must be there",
      "d) No, the derived class must implement those methods",
    ],
    Answer:
      "Answer: d\nExplanation: The derived class must implement those methods. This is because the parent class is abstract and hence will have some undefined functions which has to be defined in derived classes. Since we are using single level inheritance, if derived class doesn’t implement those functions then one more class has to be there which will become multi-level inheritance.",
  },
  {
    id: 465,
    Question:
      "Which among the following is false for single level inheritance?",
    Options: [
      "a) There can be more than 2 classes in program to implement single inheritance",
      "b) There can be exactly 2 classes to implement single inheritance in a program",
      "c) There can be more than 2 independent classes involved in single inheritance",
      "d) The derived class must implement all the abstract method if single inheritance is used",
    ],
    Answer:
      "Answer: c\nExplanation: If more than 2 independent classes are involved to implement the single level inheritance, it won’t be possible as there must be only one child and one parent class and none other related class.",
  },
  {
    id: 466,
    Question:
      "Which concept will result in derived class with more features (consider maximum 3 classes)?",
    Options: [
      "a) Single inheritance",
      "b) Multiple inheritance",
      "c) Multilevel inheritance",
      "d) Hierarchical inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: If single inheritance is used then only feature of a single class are inherited, and if multilevel inheritance is used, the 2nd class might have use private inheritance. Hence only multiple inheritance can result in derived class with more features. This is not mandatory but in a case if we consider same number of features in each class, it will result the same.",
  },
  {
    id: 467,
    Question: "Single level inheritance is safer than _____________",
    Options: [
      "a) Multiple inheritance",
      "b) Interfaces",
      "c) Implementations",
      "d) Extensions",
    ],
    Answer:
      "Answer: a\nExplanation: Interfaces also represent a way of inheritance but is a wide word to decide which inheritance we are talking about in it, hence can’t be considered. Implementation and extensions also doesn’t match that level of specific idea. And multiple inheritance not so safe as it might result in some ambiguity.",
  },
  {
    id: 468,
    Question: "Which language doesn’t support single level inheritance?",
    Options: ["a) Java", "b) C++", "c) Kotlin", "d) All languages support it"],
    Answer:
      "Answer: d\nExplanation: All the languages support single level inheritance. Since any class can inherit other classes as required, if single level inheritance was not allowed it would result in failing a lot of features of OOP.",
  },
  {
    id: 469,
    Question:
      '11. What is the output of the following program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">protected</span><span class="sy4">:</span> <span class="kw4">int</span> a,b<span class="sy4">;</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>a<span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>b<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span><span class="kw2">public</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> x,y<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Garbage value",
      "b) Compile time error",
      "c) Runtime error",
      "d) Runs but gives random values as output",
    ],
    Answer:
      "Answer: b\nExplanation: The compiler doesn’t find the main function and hence will throw an error main() missing. This program is using single level inheritance but the program is incomplete. Every program must implement main function.",
  },
  {
    id: 470,
    Question: "Single level inheritance will be best for___________",
    Options: [
      "a) Inheriting a class which performs all the calculations",
      "b) Inheriting a class which can print all the calculation results",
      "c) Inheriting a class which can perform and print all calculations",
      "d) Inheriting all the classes for different calculations",
    ],
    Answer:
      "Answer: a\nExplanation: The program gives output as in option a. The program have used single level inheritance and hence have access to the parent class methods and variables. This program simply prints the value from parent class and from the child class.",
  },
  {
    id: 471,
    Question:
      "Which constructor will be called first from the classes involved in single inheritance from object of derived class?",
    Options: [
      "a) Base class constructor",
      "b) Derived class constructor",
      "c) Both class constructors at a time",
      "d) Runtime error",
    ],
    Answer:
      "Answer: b\nExplanation: Inheriting a class which can perform the most common task will be more efficient. If class which can perform all the calculations is inherited then there won’t be any problem to print the result too. But if a class which can do the most common task for all the other tasks, it will make real use of inheritance.",
  },
  {
    id: 472,
    Question:
      "If base class contains 2 nested classes, will it be possible to implement single level inheritance?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if derived class also have nested classes",
      "c) No, it will use more than 2 classes which is wrong",
      "d) No, never",
    ],
    Answer:
      "Answer: a\nExplanation: The base class constructor will be called first from the object of derived class constructor. When the derived class members are to be initialized and allocated memory, the base class members should also be confirmed with the memory allocation.",
  },
  {
    id: 473,
    Question: "Which among the following best defines multilevel inheritance?",
    Options: [
      "a) A class derived from another derived class",
      "b) Classes being derived from other derived classes",
      "c) Continuing single level inheritance",
      "d) Class which have more than one parent",
    ],
    Answer:
      "Answer: b\nExplanation: Only if the class is being derived from other derived class, it can be called as multilevel inheritance. If a class is derived from another class, it is single level inheritance. There must be more than one level of inheritance.",
  },
  {
    id: 474,
    Question:
      "If there are 5 classes, E is derived from D, D from C, C from B and B from A. Which class constructor will be called first if the object of E or D is created?",
    Options: ["a) A", "b) B", "c) C", "d) A and B"],
    Answer:
      "Answer: a\nExplanation: A is parent of all other classes indirectly. Since A is parent of B and B is parent of C and so on till E. Class A constructor will be called first always.",
  },
  {
    id: 475,
    Question:
      "If there are 3 classes. Class C is derived from class B and B is derived from A, Which class destructor will be called at last if object of C is destroyed.",
    Options: ["a) A", "b) B", "c) C", "d) All together"],
    Answer:
      "Answer: a\nExplanation: The destructors are called in the reverse order of the constructors being called. Hence in multilevel inheritance, the constructors are created from parent to child, which leads to destruction from child to parent. Hence class A destructor will be called at last.",
  },
  {
    id: 476,
    Question:
      "Which Class is having highest degree of abstraction in multilevel inheritance of 5 levels?",
    Options: [
      "a) Class at 1st level",
      "b) Class 2nd last level",
      "c) Class at 5th level",
      "d) All with same abstraction",
    ],
    Answer:
      "Answer: a\nExplanation: The class with highest degree of abstraction will be the class at the 1st level. You can look at a simple example like, a CAR is more abstract than SPORTS CAR class. The level of abstraction decrease with each level as more details comes out.",
  },
  {
    id: 477,
    Question:
      "If all the classes use private inheritance in multilevel inheritance then ______________",
    Options: [
      "a) It will not be called multilevel inheritance",
      "b) Each class can access only non-private members of its parent",
      "c) Each subsequent class can access all members of previous level parent classes",
      "d) None of the members will be available to any other class",
    ],
    Answer:
      "Answer: b\nExplanation: The classes will be able to access only the non-private members of its parent class. The classes are using private inheritance, hence all the members of the parent class become private in the derived class. In turn those won’t be allowed for further inheritance or direct access outside the class.",
  },
  {
    id: 478,
    Question: "Multilevel inheritance allows _________________ in the program.",
    Options: [
      "a) Only 7 levels of inheritance",
      "b) At least 7 levels of inheritance",
      "c) At most 16 levels of inheritance",
      "d) As many levels of inheritance as required",
    ],
    Answer:
      "Answer: d\nExplanation: The multilevel inheritance allows any number of levels of inheritance. This is the maximum flexibility feature to make the members available to all the new classes and to add their own functionalities. The code reusability is used too.",
  },
  {
    id: 479,
    Question:
      "What is the minimum number of levels for a implementing multilevel inheritance?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: c\nExplanation: There must be at least 3 levels of inheritance. Otherwise if less, it will be single level inheritance or would have got no inheritance implemented. There must be a derived class from which another class is derived.",
  },
  {
    id: 480,
    Question: "In multilevel inheritance one class inherits _______________",
    Options: [
      "a) Only one class",
      "b) More than one class",
      "c) At least one class",
      "d) As many classes as required",
    ],
    Answer:
      "Answer: a\nExplanation: The classes inherit only from one class. This continues as each class inherits only one class. There should not be any class that inherits from two or more classes or which have more than one subclass.",
  },
  {
    id: 481,
    Question: "Can abstract classes be used in multilevel inheritance?",
    Options: [
      "a) Yes, always",
      "b) Yes, only one abstract class",
      "c) No, abstract class doesn’t have constructors",
      "d) No, never",
    ],
    Answer:
      "Answer: b\nExplanation: There is no mandatory rule to make the members private for multilevel inheritance. Moreover, if all the classes have only the private members then there won’t be any member to get inherited. Hence the working will be of no use.",
  },
  {
    id: 482,
    Question:
      "How many abstract classes can be used in multilevel inheritance?",
    Options: [
      "a) Only 1",
      "b) Only 2",
      "c) At least one less than number of levels",
      "d) Can’t be used",
    ],
    Answer:
      "Answer: a\nExplanation: The abstract classes can always be used in multilevel inheritance. The only condition that may arise is that all the undefined functions must be defined in subclasses. There must not be any undefined function.",
  },
  {
    id: 483,
    Question:
      "If all the classes used parameterized constructors and no default constructor then ___________",
    Options: [
      "a) The object of lower level classes can’t be created",
      "b) Object of lower level classes must call parent class constructors explicitly",
      "c) Object of lower level classes must define all the default constructors",
      "d) Only object of first class can be created, which is first parent",
    ],
    Answer:
      "Answer: c\nExplanation: At least one class must implement all the undefined functions. Hence there must be at least one class which is not abstract. That is at least one less than number of levels.",
  },
  {
    id: 484,
    Question:
      "In multilevel inheritance, which is the most significant feature of OOP used?",
    Options: [
      "a) Code readability",
      "b) Flexibility",
      "c) Code reusability",
      "d) Code efficiency",
    ],
    Answer:
      "Answer: b\nExplanation: Each class constructor must be called before creating the object of any subclass. Hence it will be mandatory to call the constructors of parent classes explicitly with parameters. This will make all the previous class member be initialized and then the class in use will be able to create the object.",
  },
  {
    id: 485,
    Question:
      '14. Does following code show multiple inheritance?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">&nbsp;\n<span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> a<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B\n<span class="br0">{</span>\n\t<span class="kw4">int</span> b<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span><span class="kw2">public</span> A, <span class="kw2">public</span> B\n<span class="br0">{</span>\n\t<span class="kw4">int</span> c<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> D<span class="sy4">:</span><span class="kw2">public</span> C\n<span class="br0">{</span>\n\t<span class="kw4">int</span> d<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Yes, class C and class D",
      "b) Yes, All together it’s multilevel",
      "c) No, 4 classes are used",
      "d) No, multiple inheritance is used with class A, B and C",
    ],
    Answer:
      "Answer: c\nExplanation: The classes using multilevel inheritance will use the code in all the subsequent subclasses if available. Hence the most significant feature among the options given is code reusability. This feature is generally intended to use the data values and reuse the redundant functions.",
  },
  {
    id: 486,
    Question:
      "Is it compulsory for all the classes in multilevel inheritance to have constructors defined explicitly if only last derived class object is created?",
    Options: [
      "a) Yes, always",
      "b) Yes, to initialize the members",
      "c) No, it not necessary",
      "d) No, Constructor must not be defined",
    ],
    Answer:
      "Answer: d\nExplanation: Since multiple inheritance is used to derive class C and then class D is derived from class C. This is not multilevel inheritance. The classes should derive from single class. This is actually hybrid inheritance.",
  },
  {
    id: 487,
    Question: "Multiple inheritance is ____________________",
    Options: [
      "a) When a class is derived from another class",
      "b) When a class is derived from two or more classes",
      "c) When a class is derived from other two derived classes",
      "d) When a class is derived from exactly one class",
    ],
    Answer:
      "Answer: b\nExplanation: The multiple inheritance is used when a class is being derived using two base classes or more. This way a single class can have features of more than one classes inherited into a single unit. This lets us combine two class members into a single class.",
  },
  {
    id: 488,
    Question:
      "Which problem arises due to multiple inheritance, if hierarchical inheritance is used previously for its base classes?",
    Options: ["a) Diamond", "b) Circle", "c) Triangle", "d) Loop"],
    Answer:
      "Answer: a\nExplanation: The diamond problem arises when multiple inheritance is used. This problem arises because the same name member functions get derived into a single class. Which in turn creates ambiguity in calling those methods.",
  },
  {
    id: 489,
    Question:
      "How many classes should a program contain to implement the multiple inheritance?",
    Options: ["a) Only 1", "b) At least 1", "c) At least 3", "d) Exactly 3"],
    Answer:
      "Answer: c\nExplanation: For the implementation of multiple inheritance, there must be at least 3 classes in a program. At least 2 base classes and one class to inherit those two classes. If lesser, it becomes single level inheritance.",
  },
  {
    id: 490,
    Question:
      "Which programming language restricts the use of multiple inheritance?",
    Options: ["a) C++", "b) PHP", "c) SmallTalk", "d) Java"],
    Answer:
      "Answer: d\nExplanation: Java doesn’t allow use of multiple inheritance with classes. But this can be done by using the interfaces. This is more secure and unambiguous way to implement multiple inheritance.",
  },
  {
    id: 491,
    Question:
      "Is it possible to have all the abstract classes as base classes of a derived class from those?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if derived class implements all the methods",
      "c) No, because abstract classes doesn’t have constructors",
      "d) No, never",
    ],
    Answer:
      "Answer: b\nExplanation: The condition for abstract class applies same here too. All the undefined functions must be defined. Hence all the base classes can be abstract but derived class must implement all those undefined functions.",
  },
  {
    id: 492,
    Question:
      "If class A inherits class B and class C as “class A: public class B, public class C {// class body ;}; ”, which class constructor will be called first?",
    Options: ["a) Class A", "b) Class B", "c) Class C", "d) All together"],
    Answer:
      "Answer: b\nExplanation: The constructors of parent class will be called first. In that, the constructor of the classes will be called in the same sequence as that mentioned in class definition inheritance. Since class B is mentioned first for inheritance, its constructor will be called first.",
  },
  {
    id: 493,
    Question: "Why does diamond problem arise due to multiple inheritance?",
    Options: [
      "a) Methods with same name creates ambiguity and conflict",
      "b) Methods inherited from the superclass may conflict",
      "c) Derived class gets overloaded with more than two class methods",
      "d) Derived class can’t distinguish the owner class of any derived method",
    ],
    Answer:
      "Answer: a\nExplanation: All the derived classes can distinguish the base class members, but if a method is being inherited to the base classes from another class which again gets inherited into same class (diamond shape), that may create conflict in using the function from two available.",
  },
  {
    id: 494,
    Question:
      "How many base classes can a derived class have which is implementing multiple inheritance?",
    Options: [
      "a) Only 2",
      "b) At least 2",
      "c) At most 2",
      "d) As many as required",
    ],
    Answer:
      "Answer: d\nExplanation: The classes can derive from as many classes as required since the multiple inheritance feature is made to combine or group together the functions that are from different classes. This make the derived class stronger in terms of its flexibility.",
  },
  {
    id: 495,
    Question: "How to overcome diamond problem?",
    Options: [
      "a) Using alias name",
      "b) Using seperate derived class",
      "c) Using virtual keyword with same name function",
      "d) Can’t be done",
    ],
    Answer:
      "Answer: c\nExplanation: To overcome the ambiguity and conflict we can use keyword virtual. This will help us to differentiate the functions with same name that came to last derived class in diamond problem.",
  },
  {
    id: 496,
    Question:
      "When multiple inheritance is used, which class object should be used in order to access all the available members of parent and derived class?",
    Options: [
      "a) Derived class object",
      "b) Parent class objects",
      "c) Use Abstract derived class",
      "d) Derive a class from derived class",
    ],
    Answer:
      "Answer: a\nExplanation: The derived class object can access all of its own members. It can also access the available members of the parent classes, because the members are derived into the derived class.",
  },
  {
    id: 497,
    Question:
      "If all the members of all the base classes are private then _____________",
    Options: [
      "a) There won’t be any use of multiple inheritance",
      "b) It will make those members public",
      "c) Derived class can still access them in multiple inheritance",
      "d) Compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: The derived class will not be able to access any members of the base classes. Since private member’s are not inheritable. It leads to no use of multiple inheritance.",
  },
  {
    id: 498,
    Question:
      "Is it compulsory to have constructor for all the classes involved in multiple inheritance?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if no abstract class is involved",
      "c) No, only classes being used should have a constructor",
      "d) No, they must not contain constructors",
    ],
    Answer:
      "Answer: b\nExplanation: The constructors must be defined in every class. If class is abstract, it won’t have any constructor but other classes must have constructor. Either implicit or explicit.",
  },
  {
    id: 499,
    Question:
      "If a class contains 2 nested class and is being inherited by another class, will there be any multiple inheritance?",
    Options: [
      "a) No, only single level inheritance is used",
      "b) No, only multilevel inheritance is used",
      "c) Yes, because 3 classes are involved",
      "d) Yes, because more than 1 classes are being derived",
    ],
    Answer:
      "Answer: a\nExplanation: When a class having nested classes is being derived into another class. It indirectly means a simple class is being inherited to another class. This is single level inheritance.",
  },
  {
    id: 500,
    Question:
      "Which members can’t be accessed in derived class in multiple inheritance?",
    Options: [
      "a) Private members of base",
      "b) Public members of base",
      "c) Protected members of base",
      "d) All the members of base",
    ],
    Answer:
      "Answer: a\nExplanation: The private member’s are available for only the class containing those members. Derived classes will have access to protected and public members only.",
  },
  {
    id: 501,
    Question:
      "Can the derived class be made abstract if multiple inheritance is used?",
    Options: [
      "a) No, because other classes must be abstract too",
      "b) Yes, if all the functions are implemented",
      "c) Yes, if all the methods are predefined",
      "d) No, since constructors won’t be there",
    ],
    Answer:
      "Answer: d\nExplanation: The derived class must not be abstract. This is because the abstract classes doesn’t have constructor and hence we won’t be having the capability to have instances. This will restrict the use of multiple inheritance.",
  },
  {
    id: 502,
    Question:
      "Which among the following is best to define hierarchical inheritance?",
    Options: [
      "a) More than one classes being derived from one class",
      "b) More than 2 classes being derived from single base class",
      "c) At most 2 classes being derived from single base class",
      "d) At most 1 class derived from another class",
    ],
    Answer:
      "Answer: a\nExplanation: When two or more classes get derived from a single base class, it is known as hierarchical inheritance. This gives us freedom to use same code with different scopes and flexibility into different classes.",
  },
  {
    id: 503,
    Question:
      "Do members of base class gets divided among all of its child classes?",
    Options: [
      "a) Yes, equally",
      "b) Yes, depending on  type of inheritance",
      "c) No, it’s doesn’t get divided",
      "d) No, it may or may not get divided",
    ],
    Answer:
      "Answer: c\nExplanation: The class members doesn’t get divided among the child classes. All the members get derived to each of the subclasses as whole. The only restriction is from the access specifiers used.",
  },
  {
    id: 504,
    Question: "Each class can inherit the base class ________________",
    Options: [
      "a) Independently using any inheritance",
      "b) Independently with private inheritance only",
      "c) With same type of inheritance",
      "d) With each class using different inheritance only",
    ],
    Answer:
      "Answer: a\nExplanation: The classes can inherit the base class using any type of inheritance. There is no mandatory condition to use same private,public or protected inheritance only.",
  },
  {
    id: 505,
    Question:
      "How many classes must be there to implement hierarchical inheritance?",
    Options: ["a) Exactly 3", "b) At least 3", "c) At most 3", "d) At least 1"],
    Answer:
      "Answer: b\nExplanation: At least 3 classes must be there. Two derived classes and one base class. This lets us implement two classes that have common characteristics from base class.",
  },
  {
    id: 506,
    Question: "Base class  _______________",
    Options: [
      "a) Can be made abstract",
      "b) Can’t be made abstract",
      "c) Must be abstract",
      "d) If made abstract, compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: The base class may or may not be declared abstract. It depends on the need of program. If it is made abstract, it can contain undefined functions too. In turn, those functions will have to be implemented by each of the derived classes.",
  },
  {
    id: 507,
    Question:
      "Which access specifiers should be used so that all the derived classes restrict further inheritance of base class members?",
    Options: [
      "a) Private",
      "b) Public",
      "c) Protected",
      "d) Any inheritance type can be used",
    ],
    Answer:
      "Answer: a\nExplanation: All the derived classes must use private inheritance. This will make the members of base class private in derived classes. Hence none of the members of base class will be available for further inheritance.",
  },
  {
    id: 508,
    Question:
      '7. Which class uses hierarchical inheritance in following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> a<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> b<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span><span class="kw2">class</span> A,<span class="kw2">class</span> B\n<span class="br0">{</span>\n\t<span class="kw4">int</span> c<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> D<span class="sy4">:</span><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> d<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Class A, B, C",
      "b) Class B, C, D",
      "c) Class A, C, D",
      "d) Class D, A, B",
    ],
    Answer:
      "Answer: d\nExplanation: Class A is base class and B and D are derived classes. If class C is considered, it shows hybrid inheritance, involving single level and multiple inheritance.",
  },
  {
    id: 509,
    Question:
      '8. Which among the following is correct for following code?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1">abstract <span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span> Int a<span class="sy4">;</span>\n\t<span class="kw2">public</span> <span class="kw4">void</span> disp<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B<span class="sy4">:</span><span class="kw2">public</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">void</span> dis<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\tcourt<span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>a<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> C<span class="sy4">:</span><span class="kw2">private</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span> <span class="kw4">void</span> incr<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\ta<span class="sy2">++</span><span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span>\n<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tB b.<span class="me1">disp</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Compile time error",
      "b) Runtime error",
      "c) Program runs and o/p is 0",
      "d) Program runs and o/p is garbage value",
    ],
    Answer:
      "Answer: a\nExplanation: The derived class D have not implemented the undefined function. Here the main concept involves hierarchical inheritance with abstract base class.",
  },
  {
    id: 510,
    Question:
      "How many classes can be derived from the base class using hierarchical inheritance?",
    Options: [
      "a) As many as required",
      "b) Only 7",
      "c) Only 3",
      "d) Up to 127",
    ],
    Answer:
      "Answer: a\nExplanation: The number of classes that can be derived from a base class doesn’t have any restriction and hence will be able to derive as many classes as required. This feature gives more flexibility and code reusability.",
  },
  {
    id: 511,
    Question: "Which among the following is true?",
    Options: [
      "a) Hierarchical inheritance is subset of multiple inheritances",
      "b) Hierarchical inheritance is strongest inheritance type",
      "c) Hierarchical inheritance uses only 2 classes for implementation",
      "d) Hierarchical inheritance allows inheritance of common features to more than one class",
    ],
    Answer:
      "Answer: b\nExplanation: The classes are independent and can access the base class and inherit it in whichever way it is required. The classes can use the base base class members privately or publically maintaining the security of data and methods.",
  },
  {
    id: 512,
    Question: "Hierarchical inheritance can be a subset of _________________",
    Options: [
      "a) Hybrid inheritance",
      "b) Multiple inheritance",
      "c) Single level inheritance",
      "d) Multilevel inheritance",
    ],
    Answer:
      "Answer: d\nExplanation: Hierarchical inheritance is used to make all the inherited classes have some common features obtained from a single base class. This allows all the classes to maintain a group or to be classified under one class.",
  },
  {
    id: 513,
    Question:
      "Which type of inheritance is most suitable for inheriting Same syllabus into different colleges with different streams?",
    Options: ["a) Multiple", "b) Single", "c) Hierarchical", "d) Multilevel"],
    Answer:
      "Answer: a\nExplanation: When we use hybrid inheritance, it can contain any type of inheritance or combination or more than two types. Hence it may contain Hierarchical inheritance too, hence it can be subset of hybrid inheritance.",
  },
  {
    id: 514,
    Question:
      "Which class constructor is called first when an object of derived class is created?",
    Options: [
      "a) Base class constructor",
      "b) Derived class constructor",
      "c) Firstly created derived class constructor",
      "d) Last created derived class constructor",
    ],
    Answer:
      "Answer: c\nExplanation: When hierarchical inheritance is used, the common syllabus can be adopted into different college classes where the same syllabus is applicable. For changing the syllabus only the details of base class will have to changed.",
  },
  {
    id: 515,
    Question: "Which among the following best defines the hybrid inheritance?",
    Options: [
      "a) Combination of two or more inheritance types",
      "b) Combination of same type of inheritance",
      "c) Inheritance of more than 7 classes",
      "d) Inheritance involving all the types of inheritance",
    ],
    Answer:
      "Answer: a\nExplanation: When more than one type of inheritance are used together, it results in new type of inheritance which is in general known as hybrid inheritance. This may of may not have better capabilities.",
  },
  {
    id: 516,
    Question: "How many types of inheritance should be used for hybrid?",
    Options: [
      "a) Only 1",
      "b) At least 2",
      "c) At most two",
      "d) Always more than 2",
    ],
    Answer:
      "Answer: b\nExplanation: There must be combination of at least 2 types of inheritance. The inheritance should be of different type.",
  },
  {
    id: 517,
    Question:
      "If single inheritance is used with class A and B. A is base class. Then class C, D and E where C is base class and D is derived from C, then E is derived from D. Class C is made to inherit from class B. Which is the resultant type?",
    Options: ["a) Single level", "b) Multilevel", "c) Hybrid", "d) Multiple"],
    Answer:
      "Answer: b\nExplanation: The statement represents multilevel inheritance. It is not hybrid since looking at complete idea, one can’t differentiate whether two type of inheritance are used. Hence it is multilevel inheritance.",
  },
  {
    id: 518,
    Question:
      "Diamond problem includes ____________________ hybrid inheritance.",
    Options: [
      "a) Hierarchical and Multiple",
      "b) Hierarchical and Hierarchical",
      "c) Multiple and Multilevel",
      "d) Single, Hierarchical and Multiple",
    ],
    Answer:
      "Answer:a\nExplanation: The diamond problem arises when more than one classes are derived from one class and then those classes are used to derive single clas. Resulting in ambiguity of same functions from each class.",
  },
  {
    id: 519,
    Question:
      "If __________________ inheritance is done continuously, it is similar to tree structure.",
    Options: [
      "a) Hierarchical",
      "b) Multiple",
      "c) Multilevel",
      "d) Hierarchical and Multiple",
    ],
    Answer:
      "Answer: a\nExplanation: Hierarchical inheritance is deriving more than one classes from a base class, it it is done continuously and subsequently, it results forming a tree like structure of classes being linked.",
  },
  {
    id: 520,
    Question: "Which amongst the following is true for hybrid inheritance?",
    Options: [
      "a) Constructor calls are in reverse",
      "b) Constructor calls are priority based",
      "c) Constructor of only derived class is called",
      "d) Constructor calls are usual",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors will be called in usual way. First the parent class Constructor and then the derived class Constructors. This is done to initialise all the members properly.",
  },
  {
    id: 521,
    Question:
      "Which type of inheritance must be used so that the resultant is hybrid?",
    Options: ["a) Multiple", "b) Hierarchical", "c) Multilevel", "d) None"],
    Answer:
      "Answer: d\nExplanation: The use of any specific type is not necessary. Though the final structure should not be the same, it should represent more than one type of inheritance if class diagram is drawn.",
  },
  {
    id: 522,
    Question:
      "If hierarchical inheritance requires to inherit more than one class to single class, which syntax is correct? (A, B, C are class names)",
    Options: [
      "a) hierarchical class A: public B, public C",
      "b) multiple class A: public B, public C",
      "c) many class A: public B, public C",
      "d) class A: public B, public C",
    ],
    Answer:
      "Answer: b\nExplanation: The private member’s scope can’t be changed and those can never be accessed in other classes. Only the class containing private member’s can access its own members.",
  },
  {
    id: 523,
    Question:
      "What is the maximum number of classes allowed in hybrid inheritance?",
    Options: ["a) 7", "b) 127", "c) 255", "d) As many as required"],
    Answer:
      "Answer: d\nExplanation: The syntax is as same as declaration of other classes. There is no specific keyword defined for using hybrid inheritance in programming. Only thing is to specify the class name separated by commas.",
  },
  {
    id: 524,
    Question:
      "What is the minimum number of classes to be there in a program implementing hybrid inheritance?",
    Options: ["a) 2", "b) 3", "c) 4", "d) No limit"],
    Answer:
      "Answer: d\nExplanation: The classes in any type of inheritance can inherit as many classes as required. The only condition that may arise is memory management. The classes can inherit most of the features from more than one class.",
  },
  {
    id: 525,
    Question:
      "If object of lowest level class is created (last derived class) ________________  of its parent class constructors are called.",
    Options: [
      "a) Few",
      "b) All",
      "c) Only parent and parent",
      "d) Base and Derived",
    ],
    Answer:
      "Answer: d\nExplanation: The answer is no limit. There is no condition defined for limit of classes that has to be used in hybrid. Though you must have at least 4 classes so that one set of multiple or hierarchical inheritance is there and one more class to use single level inheritance.",
  },
  {
    id: 526,
    Question:
      "If hybrid inheritance is used, it mostly shows _______________ feature of OOP.",
    Options: [
      "a) Flexibility",
      "b) Reusability",
      "c) Efficiency",
      "d) Code readability",
    ],
    Answer:
      "Answer: c\nExplanation: When derived class object is created, all of its successor parent classes constructors are called. Constructor of all the connected classes is not created. Since the parent members have to be initialised, but other derived classes are not needed.",
  },
  {
    id: 527,
    Question:
      "The sequence of destructors being called while using hybrid inheritance is ____________",
    Options: [
      "a) Reverse of constructors being called",
      "b) Reverse of classes being made",
      "c) Reverse of objects being created",
      "d) Reverse of code calling objects",
    ],
    Answer:
      "Answer: b\nExplanation: The code is reusable in most of the classes and the data becomes more linked to other classes. Other features are also exhibited, but the code reusability is used the most. Code readability becomes relatively less. Flexibility increases but it depends on how the hybrid inheritance is used.",
  },
  {
    id: 528,
    Question:
      "Virtual function is ______ class function which expected to be redefined in ______ class, so that when reference is made to derived class object using pointer then we can call virtual function to execute ________ class definition version.",
    Options: [
      "a) Base, derived, derived",
      "b) Derived, Derived, Derived",
      "c) Base, derived, base",
      "d) Base, base, derived",
    ],
    Answer:
      "Answer: a\nExplanation: The functions which may give rise to ambiguity due to inheritance, can be declared virtual. So that whenever derived class object is referred using pointer or reference to the base class methods, we can still call the derived class methods using virtual function. Hence this differentiates those methods from each other.",
  },
  {
    id: 529,
    Question:
      "What does a virtual function ensure for an object, among the following?",
    Options: [
      "a) Correct method is called, regardless of the class defining it",
      "b) Correct method is called, regardless of the object being called",
      "c) Correct method is called, regardless of the type of reference used for function call",
      "d) Correct method is called, regardless of the type of function being called by objects",
    ],
    Answer:
      "Answer: c\nExplanation: It is property of the virtual function and one of their main use. Its use ensure that the correct method is called even though it is been called from different pointer or references. This also decreases chance of mistakes in program.",
  },
  {
    id: 530,
    Question: "Virtual functions are mainly used to achieve _____________",
    Options: [
      "a) Compile time polymorphism",
      "b) Interpreter polymorphism",
      "c) Runtime polymorphism",
      "d) Functions code polymorphism",
    ],
    Answer:
      "Answer: c\nExplanation: It is used to achieve runtime polymorphism. The functions which are inherited and overridden, so at runtime the correct function is executed. The correct function call is made from the intended class.",
  },
  {
    id: 531,
    Question: "Which keyword is used to declare virtual functions?",
    Options: ["a) virtual", "b) virt", "c) anonymous", "d) virtually"],
    Answer:
      "Answer: a\nExplanation: The virtual keyword is used to declare virtual functions. Anonymous keyword is used with classes and have a different meaning. The virtual functions are used to call the intended function of the derived class.",
  },
  {
    id: 532,
    Question: "Where the virtual function should be defined?",
    Options: [
      "a) Twice in base class",
      "b) Derived class",
      "c) Base class and derived class",
      "d) Base class",
    ],
    Answer:
      "Answer: d\nExplanation: The virtual function should be declared in base class. So that when the derived class inherits from the base class, the functions can be differentiated from the one in base class and another in derived class.",
  },
  {
    id: 533,
    Question: "The resolving of virtual functions is done at ______________",
    Options: [
      "a) Compile time",
      "b) Interpret time",
      "c) Runtime",
      "d) Writing source code",
    ],
    Answer:
      "Answer: c\nExplanation: The resolving of virtual functions that are to be called is done at run time. The base class and the derived classes may contain different definitions and different variables, so all these things are resolved at run time and decided which function is to be called.",
  },
  {
    id: 534,
    Question: "In which access specifier should a virtual function be defined?",
    Options: ["a) Private", "b) Public", "c) Protected", "d) Default"],
    Answer:
      "Answer: b\nExplanation: The virtual functions must be defined in public section of a class. This is to ensure that the virtual function is available everywhere in the program. Also to avoid any error while resolving the method.",
  },
  {
    id: 535,
    Question: "Virtual functions can never be made _______________",
    Options: [
      "a) Static function",
      "b) Parameterized function",
      "c) Default argument function",
      "d) Zero parameter function",
    ],
    Answer:
      "Answer: a\nExplanation: The virtual function must not be static. Those functions are the property of individual objects and not of a class as a whole. The functions should not be made common for all the objects of that class.",
  },
  {
    id: 536,
    Question:
      "Which is a must condition for virtual function to achieve runtime polymorphism?",
    Options: [
      "a) Virtual function must be accessed with direct name",
      "b) Virtual functions must be accessed using base class object",
      "c) Virtual function must be accessed using pointer or reference",
      "d) Virtual function must be accessed using derived class object only",
    ],
    Answer:
      "Answer: a\nExplanation: The friend functions can access the private members also. This may hinder the security of class members. This is why the functions should not be made friend functions of other class.",
  },
  {
    id: 537,
    Question: "Which among the following is true for virtual functions?",
    Options: [
      "a) Prototype must be different in base and derived class",
      "b) Prototype must be same in base class and derived class",
      "c) Prototype must be given only in base class",
      "d) Prototype must have different signature in base and derived class",
    ],
    Answer:
      "Answer: c\nExplanation: The virtual functions must be called using pointer or reference. This is mandatory so that the intended function gets executed while resolving the method at runtime. The must not be any ambiguity between the method of parent class and derived class.",
  },
  {
    id: 538,
    Question:
      "The virtual functions must be declared and defined in _____________ class and overridden in ___________ class.",
    Options: [
      "a) Base, base",
      "b) Derived, derived",
      "c) Derived, base",
      "d) Base, derived",
    ],
    Answer:
      "Answer: b\nExplanation: The prototype must be the same. Because the function is to be overridden in the derived class. If the function prototype is different in derived class then it will not override the base class function and hence virtual function concept won’t work here.",
  },
  {
    id: 539,
    Question:
      "It is __________ to redefine the virtual function in derived class.",
    Options: [
      "a) Necessary",
      "b) Not necessary",
      "c) Not acceptable",
      "d) Good practice",
    ],
    Answer:
      "Answer: d\nExplanation: The virtual functions must be declared and defined in base class. The functions can be redefined in derived class. If redefined in derived class then it overrides the base class function definition.",
  },
  {
    id: 540,
    Question: "Which among the following is true?",
    Options: [
      "a) A class may have virtual destructor but not virtual constructor",
      "b) A class may have virtual constructor but not virtual destructor",
      "c) A class may have virtual constructor and virtual constructor",
      "d) A class may have either virtual destructor or virtual constructor",
    ],
    Answer:
      "Answer: b\nExplanation: It is not necessary to redefine the virtual function in the derived class. If not defined, the base class function definition is used but if defined, the intended definition is used according to need. It is not about good coding practice as it should be redefined only if needed.",
  },
  {
    id: 541,
    Question:
      "If virtual function of base class is redefined in derived class then ________________",
    Options: [
      "a) It must be declared virtual in derived class also",
      "b) It may or may not be declared virtual in derived class",
      "c) It can must not be declared virtual in derived class",
      "d) It must be declared normally in derived class",
    ],
    Answer:
      "Answer: a\nExplanation: Any class can contain virtual destructor. But is not possible to define a virtual constructor. The reason behind is that the destructors can be overridden but constructors should not be.",
  },
  {
    id: 542,
    Question: "Which among the following best defines the abstract methods?",
    Options: [
      "a) Functions declared and defined in base class",
      "b) Functions only declared in base class",
      "c) Function which may or may not be defined in base class",
      "d) Function which must be declared in derived class",
    ],
    Answer:
      "Answer: b\nExplanation: The abstract functions must only be declared in base class. Their definitions are provided by the derived classes. It is a mandatory condition.",
  },
  {
    id: 543,
    Question: "Which among the following is true?",
    Options: [
      "a) The abstract functions must be only declared in derived classes",
      "b) The abstract functions must not be defined in derived classes",
      "c) The abstract functions must be defined in base and derived class",
      "d) The abstract functions must be defined either in base or derived class",
    ],
    Answer:
      "Answer: a\nExplanation: The abstract functions can’t be defined in base class. They are to be defined in derived classes. It is a rule for abstract functions.",
  },
  {
    id: 544,
    Question:
      "How are abstract functions different from the abstract functions?",
    Options: [
      "a) Abstract must not be defined in base class whereas virtual function can be defined",
      "b) Either of those must be defined in base class",
      "c) Different according to definition",
      "d) Abstract functions are faster",
    ],
    Answer:
      "Answer: a\nExplanation: The abstract functions are only declared in base class. Derived classes have to implement those functions in order to inherit that base class. The functions are always defined in derived classes only.",
  },
  {
    id: 545,
    Question: "Which among the following is correct?",
    Options: [
      "a) Abstract functions should not be defined in all the derived classes",
      "b) Abstract functions should be defined only in one derived class",
      "c) Abstract functions must be defined in base class",
      "d) Abstract functions must be defined in all the derived classes",
    ],
    Answer:
      "Answer: d\nExplanation: The abstract function are only declared in base classes and then has to be defined in all the derived classes. This allows all the derived classes to define own definition of any function whose declaration in base class might be common to all the other derived classes.",
  },
  {
    id: 546,
    Question: "It is ____________________ to define the abstract functions.",
    Options: [
      "a) Mandatory for all the classes in program",
      "b) Necessary for all the base classes",
      "c) Necessary for all the derived classes",
      "d) Not mandatory for all the derived classes",
    ],
    Answer:
      "Answer: c\nExplanation: The derived classes must define the abstract function of base class in their own body. This is a necessary condition. Because the abstract functions doesn’t contain any definition in base class and hence becomes mandatory for the derived class to define them. All the functions in a program must have some definition.",
  },
  {
    id: 547,
    Question:
      "The abstract function definitions in derived classes is enforced at _________",
    Options: [
      "a) Runtime",
      "b) Compile time",
      "c) Writing code time",
      "d) Interpreting time",
    ],
    Answer:
      "Answer: b\nExplanation: When the program is compiled, these definitions are checked if properly defined. This compiler also ensure that the function is being defined by all the derived classes. Hence we get a compile time error if not done.",
  },
  {
    id: 548,
    Question:
      "What is this feature of enforcing definitions of abstract function at compile time called?",
    Options: [
      "a) Static polymorphism",
      "b) Polymorphism",
      "c) Dynamic polymorphism",
      "d) Static or dynamic according to need",
    ],
    Answer:
      "Answer: c\nExplanation: The feature is known as Dynamic polymorphism. Because the definitions are resolved at runtime. Even though the definitions are checked at compile time, they are resolved at runtime only.",
  },
  {
    id: 549,
    Question: "What is the syntax for using abstract method?",
    Options: [
      "a) <access-modifier>abstract<return-type>method_name (parameter)",
      "b) abs<return-type>method name (parameter)",
      "c) <access-modifier>abstract return-type method name (parameter)",
      "d) <access-modifier>abstract <returning> method name (parameter)",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax must firstly contain the access modifier. Then the keyword abstract is written to mention clearly to the compiler that it is an abstract method. Then prototype of the function with return type, function name and parameters.",
  },
  {
    id: 550,
    Question:
      "If a function declared as abstract in base class doesn’t have to be defined in derived class then ______",
    Options: [
      "a) Derived class must define the function anyhow",
      "b) Derived class should be made abstract class",
      "c) Derived class should not derive from that base class",
      "d) Derived class should not use that function",
    ],
    Answer:
      "Answer: b\nExplanation: If the function that is not to be defined in derived class but is declared as abstract in base class then the derived class must be made an abstract class. This will make the concept mandatory that the derived class must have one subclass to define that method.",
  },
  {
    id: 551,
    Question: "Which among the following is true?",
    Options: [
      "a) Abstract methods can be static",
      "b) Abstract methods can be defined in derived class",
      "c) Abstract methods must not be static",
      "d) Abstract methods can be made static in derived class",
    ],
    Answer:
      "Answer: a\nExplanation: The abstract functions can’t be made static in a program. If those are made static then the function will be a property of class rather than each object. In turn ever object or derived class must use the common definition given in the base class. But abstract functions can’t be defined in the base class. Hence not possible.",
  },
  {
    id: 552,
    Question: "Which among the following is correct for abstract methods?",
    Options: [
      "a) It must have different prototype in the derived class",
      "b) It must have same prototype in both base and derived class",
      "c) It must have different signature in derived class",
      "d) It must have same return type only",
    ],
    Answer:
      "Answer: c\nExplanation: The abstract methods can never be made static. Even if it is in derived class, it can’t be made static. If this happens, then all the subsequent sub classes will have a common definition of abstract function which is not desirable.",
  },
  {
    id: 553,
    Question:
      "If a class have all the abstract methods the class will be known as ___________",
    Options: [
      "a) Abstract class",
      "b) Anonymous class",
      "c) Base class",
      "d) Derived class",
    ],
    Answer:
      "Answer: b\nExplanation: The prototype must be the same. This is to override the function declared as abstract in base class. Or else it will not be possible to override the abstract function of base class and hence we get a compile time error.",
  },
  {
    id: 554,
    Question: "The abstract methods can never be ___________ in a base class.",
    Options: ["a) Private", "b) Protected", "c) Public", "d) Default"],
    Answer:
      "Answer: a\nExplanation: The classes containing all the abstract methods are known as abstract classes. And the abstract classes can never have any normal function with definition. Hence known as abstract class.",
  },
  {
    id: 555,
    Question:
      "The abstract method definition can be made ___________ in derived class.",
    Options: [
      "a) Private",
      "b) Protected",
      "c) Public",
      "d) Private, public, or protected",
    ],
    Answer:
      "Answer: a\nExplanation: The base class must not contain the abstract methods. The methods have to be derived and defined in derived class. But if it is made private it can’t be inherited. Hence we can’t declare it as a private member.",
  },
  {
    id: 556,
    Question: "How many types of member functions are possible in general?",
    Options: ["a) 2", "b) 3", "c) 4", "d) 5"],
    Answer:
      "Answer: d\nExplanation: There are basically 5 types of member functions possible. The types include simple, static, const, inline, and friend member functions. Any of these types can be used in a program as per requirements.",
  },
  {
    id: 557,
    Question: "Simple member functions are ______________________",
    Options: [
      "a) Ones defined simply without any type",
      "b) Ones defined with keyword simple",
      "c) Ones that are implicitly provided",
      "d) Ones which are defined in all the classes",
    ],
    Answer:
      "Answer: a\nExplanation: When there is no type defined for any function and just a simple syntax is used with the return type, function name and parameter list then those are known as simple member functions. This is a general definition of simple members.",
  },
  {
    id: 558,
    Question: "What are static member functions?",
    Options: [
      "a) Functions which use only static data member but can’t be accessed directly",
      "b) Functions which uses static and other data members",
      "c) Functions which can be accessed outside the class with the data members",
      "d) Functions using only static data and can be accessed directly in main() function",
    ],
    Answer:
      "Answer: d\nExplanation: The static member functions can be accessed directly in the main function. There is no restriction on direct use. We can call them with use of objects also. But the restriction is that the static member functions can only use the static data members of the class.",
  },
  {
    id: 559,
    Question:
      "How can static member function can be accessed directly in main() function?",
    Options: [
      "a) Dot operator",
      "b) Colon",
      "c) Scope resolution operator",
      "d) Arrow operator",
    ],
    Answer:
      "Answer: c\nExplanation: The static member functions can be accessed directly in the main() function. The only restriction is that those must use only static data members of the class. These functions are property of class rather than each object.",
  },
  {
    id: 560,
    Question:
      "Correct syntax to access the static member functions from the main() function is ______________",
    Options: [
      "a) classObject::functionName();",
      "b) className::functionName();",
      "c) className:classObject:functionName();",
      "d) className.classObject:functionName();",
    ],
    Answer:
      "Answer: b\nExplanation: The syntax in option b must be followed in order to call the static functions directly from the main() function. That is a predefined syntax. Scope resolution helps to spot the correct function in the correct class.",
  },
  {
    id: 561,
    Question: "What are const member functions?",
    Options: [
      "a) Functions in which none of the data members can be changed in a program",
      "b) Functions in which only static members can be changed",
      "c) Functions which treat all the data members as constant and doesn’t allow changes",
      "d) Functions which can change only the static members",
    ],
    Answer:
      "Answer: c\nExplanation: The const member functions are intended to keep the value of all the data members of a class same and doesn’t allow any changes on them. The data members are treated as constant data and any modification inside the const function is restricted.",
  },
  {
    id: 562,
    Question:
      "Which among the following best describes the inline member functions?",
    Options: [
      "a) Functions defined inside the class only",
      "b) Functions with keyword inline only",
      "c) Functions defined outside the class",
      "d) Functions defined inside the class or with the keyword inline",
    ],
    Answer:
      "Answer: d\nExplanation: The functions which are defined with the keyword inline or are defined inside the class are treated to be inline functions. Definitions inside the class are implicitly made inline if none of the complex statements are used in the definition.",
  },
  {
    id: 563,
    Question: "What are friend member functions (C++)?",
    Options: [
      "a) Member function which can access all the members of a class",
      "b) Member function which can modify any data of a class",
      "c) Member function which doesn’t have access to private members",
      "d) Non-member functions which have access to all the members (including private) of a class",
    ],
    Answer:
      "Answer: d\nExplanation: A non-member function of a class which can access even the private data of a class is a friend function. It is an exception on access to private members outside the class. It is sometimes considered as a member functions since it has all the access that a member function in general have.",
  },
  {
    id: 564,
    Question: "What is the syntax of a const member function?",
    Options: [
      "a) void fun() const {}",
      "b) void fun() constant {}",
      "c) void const fun() {}",
      "d) const void fun(){}",
    ],
    Answer:
      "Answer: a\nExplanation: The general syntax to be followed in order to declare a const function in a class is as in option a. The syntax may vary in different programming languages.",
  },
  {
    id: 565,
    Question:
      "Which keyword is used to make a nonmember function as friend function of a class?",
    Options: ["a) friendly", "b) new", "c) friend", "d) connect"],
    Answer:
      "Answer: c\nExplanation: The keyword friend is provided in programming languages to use it whenever a functions is to be made friend of one class or other. The keyword indicates that the function is capable of new functionalities like accessing private members.",
  },
  {
    id: 566,
    Question: "Member functions _____________________",
    Options: [
      "a) Must be defined inside class body",
      "b) Can be defined inside class body or outside",
      "c) Must be defined outside the class body",
      "d) Can be defined in another class",
    ],
    Answer:
      "Answer: c\nExplanation: The functions definitions can be given inside or outside the body of class. If defined inside, general syntax is used. If defined outside then the class name followed by scope resolution operator and then function name must be given for the definition.",
  },
  {
    id: 567,
    Question: "Which among the following is true?",
    Options: [
      "a) Member functions can never be private",
      "b) Member functions can never be protected",
      "c) Member functions can never be public",
      "d) Member functions can be defined in any access specifier",
    ],
    Answer:
      "Answer: b\nExplanation: There is no restriction on the use of type of member functions inside a single class. Any type any number of times can be defined inside a class. The member functions can be used as required.",
  },
  {
    id: 568,
    Question: "Which keyword is used to define the static member functions?",
    Options: ["a) static", "b) stop", "c) open", "d) state"],
    Answer:
      "Answer: d\nExplanation: The member functions can be defined inside any specifier. There is no restriction. The programmer can apply restrictions on its use by specifying the access specifier with the functions.",
  },
  {
    id: 569,
    Question: "Which keyword is used to define the inline member function?",
    Options: ["a) no keyword required", "b) inline", "c) inlined", "d) line"],
    Answer:
      "Answer: a\nExplanation: The static keyword is used to declare any static member function in a class. The static members become common to each object of the class being created. They share the same values.",
  },
  {
    id: 570,
    Question:
      "Which among the following are valid ways of overloading the operators?",
    Options: [
      "a) Only using friend function",
      "b) Only using member function",
      "c) Either member functions or friend functions can be used",
      "d) Operators can’t be overloaded",
    ],
    Answer:
      "Answer: c\nExplanation: The operators can be overloaded by using the member function or even the friend functions can be used. This is because both of these can access all the data members of a class.",
  },
  {
    id: 571,
    Question:
      "Which among the following is mandatory condition for operators overloading?",
    Options: [
      "a) Overloaded operator must be member function of the left operand",
      "b) Overloaded operator must be member function of the right operand",
      "c) Overloaded operator must be member function of either left or right operand",
      "d) Overloaded operator must not be dependent on the operands",
    ],
    Answer:
      "Answer: a\nExplanation: The operator to be overloaded must be made the member function of the operand on left side of expressions to be used. This allows the compiler to identify whether the overloading has to be used or not. This rule also reduces the ambiguity in code.",
  },
  {
    id: 572,
    Question:
      "When the operator to be overloaded becomes the left operand member then ______________",
    Options: [
      "a) The right operand acts as implicit object represented by *this",
      "b) The left operand acts as implicit object represented by *this",
      "c) Either right or left operand acts as implicit object represented by *this",
      "d) *this pointer is not applicable in that member function",
    ],
    Answer:
      "Answer: b\nExplanation: The left operand becomes the object that is referred by *this pointer in the member function that will be called while using operator overloading. This is done to point to a specific object on which the overloading will be applied.",
  },
  {
    id: 573,
    Question:
      "If the left operand is pointed by *this pointer, what happens to other operands?",
    Options: [
      "a) Other operands are passed as function return type",
      "b) Other operands are passed to compiler implicitly",
      "c) Other operands must be passed using another member function",
      "d) Other operands are passed as function arguments",
    ],
    Answer:
      "Answer: d\nExplanation: The operands that are used during overloading expect the left operand, can be passed as function arguments. Those are then referred in function definition with the names specified in the argument list.",
  },
  {
    id: 574,
    Question:
      "If a friend overloaded operator have to be changed to member overloaded operator, which operator should be used with the class name?",
    Options: [
      "a) Scope resolution operator",
      "b) Colon",
      "c) Arrow operator",
      "d) Dot operator",
    ],
    Answer:
      "Answer: a\nExplanation: The scope resolution operator can be used followed by the class name. Then the operator keyword with the operator symbol that should be overloaded. This is done to use member function instead of friend function.",
  },
  {
    id: 575,
    Question: "What is the syntax to overload an operator?",
    Options: [
      "a) className::operator<operatorSymbol>(parameters)",
      "b) className:operator<operatorSymbol>(parameters)",
      "c) className.operator<operatorSymbol>(paramteres)",
      "d) className->operator<operatorSymbol>(parameters)",
    ],
    Answer:
      "Answer: a\nExplanation: The class name is followed by the scope resolution operator. This is done to specify the class to which the function should belong to. Then the keyword operator should be used in order to indicate the operator that is to be overloaded. Then come the parameters list to specify other operands.",
  },
  {
    id: 576,
    Question: "Why the left parameter is removed from parameter list?",
    Options: [
      "a) Because it is of no use",
      "b) Because it is never used in definitions",
      "c) Because it becomes parameter pointed by *this",
      "d) Because it can’t be referred by *this pointer",
    ],
    Answer:
      "Answer: c\nExplanation: The left object is removed from being passed as a parameter, because it is implicitly passed. It is passed implicitly because it is considered the object with respect to which the overloading function is being called.",
  },
  {
    id: 577,
    Question:
      "Which object’s members can be called directly while overloading operator function is used (In function definition)?",
    Options: [
      "a) Left operand members",
      "b) Right operand members",
      "c) All operand members",
      "d) None of the members",
    ],
    Answer:
      "Answer: a\nExplanation: This is because the left operand is passed implicitly. It is pointed by *this. This in turn means we can use the direct member names of the object because those are again converted to a syntax containing *this pointer implicitly.",
  },
  {
    id: 578,
    Question:
      "If left operand member is specified directly in the function definition, which is the correct implicit conversion of that syntax?",
    Options: [
      "a) *this className",
      "b) *this parameterObject",
      "c) *this returnedObject",
      "d) *this object",
    ],
    Answer:
      "Answer: d\nExplanation: Since the left operands are passed implicitly, those object members can be accessed directly in the function definition. The compiler converts the syntax into the syntax that can be processed. The implicitly converted syntax contains *this pointer followed by the objectName that is left operand in the expression.",
  },
  {
    id: 579,
    Question:
      "When the friend operator overloading is converted into member operator overloading _______________",
    Options: [
      "a) Two parameters of friend function remains same parameters in member operator overloading",
      "b) Two parameters of friend function becomes only one parameter of member function",
      "c) Two parameters of friend function are removed while using member function",
      "d) Two parameters of friend function are made 4 in member operator overloading",
    ],
    Answer:
      "Answer: b\nExplanation: The friend function would accept two arguments if some binary operator is overloaded. When we try to convert that definition to member operator overloading then it becomes only one parameter. The reason behind is that the left operand is passed implicitly while using the member functions.",
  },
  {
    id: 580,
    Question: "Where in the parameter list is the implicit *this is added?",
    Options: [
      "a) Right most parameter",
      "b) Anywhere in parameter list",
      "c) Left most parameter",
      "d) Not added to parameter list",
    ],
    Answer:
      "Answer: c\nExplanation: The left operand is passed implicitly by the compiler to the member function. But this is done, when the compiler adds the calling object as *this to the parameter list. It is always added as the left most parameter, i.e. the first parameter of the function.",
  },
  {
    id: 581,
    Question:
      "Which operator among the following can be overloading using only member function?",
    Options: [
      "a) Assignment operator",
      "b) Addition operator",
      "c) Subtraction operator",
      "d) Multiplication and division operator",
    ],
    Answer:
      "Answer: a\nExplanation: Only the assignment operator among the options given must be overloaded using the member functions. The assignment operator can’t be overloaded using friend function. This is a restriction in the programming languages to make the programs more resistant towards errors.",
  },
  {
    id: 582,
    Question:
      "Which operator among the following can be overloaded using both friend function and member function?",
    Options: [
      "a) Assignment operator",
      "b) Subscript",
      "c) Member selection (arrow operator)",
      "d) Modulus operator",
    ],
    Answer:
      "Answer: d\nExplanation: Only the modulus operator among the given operators can be overloaded using either friend function or member function. Other operators must be overloaded using only the member functions.",
  },
  {
    id: 583,
    Question:
      "Which operator among the following must be overloaded using the friend function?",
    Options: [
      "a) << operator only",
      "b) >> operator only",
      "c) Both << and >> operators",
      "d) It’s not mandatory to use friend function in any case",
    ],
    Answer:
      "Answer: b\nExplanation: It is not the case that all the operators can be overloaded using the member operator overloading. There are some cases where the operators must be overloaded using the friend function only. The reason behind is that the left operand should be passed *this pointer, but the left operand in these cases might be object of some other class. Hence can’t be done. ",
  },
  {
    id: 584,
    Question: "What does memory allocation for objects mean?",
    Options: [
      "a) Actual creation and memory allocation for object members",
      "b) Creation of member functions",
      "c) Creation of data members for a class",
      "d) Actual creation and data declaration for object members",
    ],
    Answer:
      "Answer: a\nExplanation: The memory allocated for the object members indicates actual creation of the object members. This is known as memory allocation for object.",
  },
  {
    id: 585,
    Question: "Where is the memory allocated for the objects?",
    Options: ["a) HDD", "b) Cache", "c) RAM", "d) ROM"],
    Answer:
      "Answer: c\nExplanation: The memory for the objects or any other data is allocated in RAM initially. This is while we run a program all the memory allocation takes place in some RAM segments. Arrays in heap and local members in stack etc.",
  },
  {
    id: 586,
    Question: "When is the memory allocated for an object?",
    Options: [
      "a) At declaration of object",
      "b) At compile time",
      "c) When object constructor is called",
      "d) When object is initialized to another object",
    ],
    Answer:
      "Answer: c\nExplanation: The object memory allocation takes place when the object constructor is called. Declaration of an object doesn’t mean that memory is allocated for its members. If object is initialized with another object, it may just get a reference to the previously created object.",
  },
  {
    id: 587,
    Question: "Using new is type safe as _______________________",
    Options: [
      "a) It require to be specified with type of data",
      "b) It doesn’t require to be specified with type of data",
      "c) It requires the name of data",
      "d) It allocated memory for the data",
    ],
    Answer:
      "Answer: b\nExplanation: The new is type safe because we don’t have to specify the type of data that have to be allocated with memory. We can directly use it with data name. Name of the data doesn’t matter though for type of memory allocation though.",
  },
  {
    id: 588,
    Question:
      "Which of the following function can be used for dynamic memory allocation of objects?",
    Options: [
      "a) malloc()",
      "b) calloc()",
      "c) create()",
      "d) both malloc() and calloc()",
    ],
    Answer:
      "Answer: d\nExplanation: The malloc() function can be used to allocate dynamic memory for objects. Function calloc() can also be use. These functions differ in the way they allocate memory for objects.",
  },
  {
    id: 589,
    Question:
      '6. How much memory will be allocated for an object of class given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> Test<span class="br0">{</span>\n<span class="kw4">int</span> mark1<span class="sy4">;</span>\n<span class="kw4">int</span> mark2<span class="sy4">;</span>\n<span class="kw4">float</span> avg<span class="sy4">;</span>\n<span class="kw4">char</span> name<span class="br0">[</span><span class="nu0">10</span><span class="br0">]</span><span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: ["a) 22 Bytes", "b) 24 Bytes", "c) 20 Bytes", "d) 18 Bytes"],
    Answer:
      "Answer: a\nExplanation: The size of an object of the class given in question will be of size 22 bytes. This is because the size of an object is always equal to the sum of sizes of the data members of the class, except static members.",
  },
  {
    id: 590,
    Question:
      "Which keyword among the following can be used to declare an array of objects in java?",
    Options: ["a) new", "b) create", "c) allocate", "d) arr"],
    Answer:
      "Answer: a\nExplanation: The keyword new can be used to declare an array of objects in java. The syntax must be specified with an object pointer which is assigned with a memory space containing the required number of object space. Even initialization can be done directly.",
  },
  {
    id: 591,
    Question: "When is the memory allocated for an object gets free?",
    Options: [
      "a) At termination of program",
      "b) When object goes out of scope",
      "c) When main function ends",
      "d) When system restarts",
    ],
    Answer:
      "Answer: b\nExplanation: Whenever an object goes out of scope, the deletion of allocation memory takes place. Actually the data is not deleted, instead the memory space is flagged to be free for further use. Hence whenever an object goes out of scope the object members become useless and hence memory is set free.",
  },
  {
    id: 592,
    Question:
      "Which among the following keyword can be used to free the allocated memory for an object?",
    Options: [
      "a) delete",
      "b) free",
      "c) either delete or free",
      "d) only delete",
    ],
    Answer:
      "Answer: c\nExplanation: The memory allocated for an object is usually automatically made free. But if explicitly memory has to be made free then we can use either free or delete keywords depending on programming languages.",
  },
  {
    id: 593,
    Question: "Which function is called whenever an object goes out of scope?",
    Options: [
      "a) Destructor function",
      "b) Constructor function",
      "c) Delete function",
      "d) Free function",
    ],
    Answer:
      "Answer: a\nExplanation: The destructor function of the class is called whenever an object goes out of scope. This is because the destructor set all the resources, acquired by the object, free. This is an implicit work of compiler.",
  },
  {
    id: 594,
    Question: "Which operator can be used to check the size of an object?",
    Options: [
      "a) sizeof(objectName)",
      "b) size(objectName)",
      "c) sizeofobject(objectName)",
      "d) sizedobject(objectName)",
    ],
    Answer:
      "Answer: a\nExplanation: The sizeof operator is used to get the size of an already created object. This operator must constail keyword sizeof(objectName). The output will give the number of bytes acquired by a single object of some class.",
  },
  {
    id: 595,
    Question: "The memory allocated for an object ____________________",
    Options: [
      "a) Can be only dynamic",
      "b) Can be only static",
      "c) Can be static or dynamic",
      "d) Can’t be done using dynamic functions",
    ],
    Answer:
      "Answer: c\nExplanation: The memory allocation for an object can be static or dynamic. The static memory allocation is when an object is declared directly without using any function usually. And dynamic allocation is when we use some dynamic allocation function to allocate memory for data member of an object.",
  },
  {
    id: 596,
    Question:
      "If an object is declared in a user defined function __________________",
    Options: [
      "a) Its memory is allocated in stack",
      "b) Its memory is allocated in heap",
      "c) Its memory is allocated in HDD",
      "d) Its memory is allocated in cache",
    ],
    Answer:
      "Answer: a\nExplanation: The memory for any data or object that are used in a user defined function are always allocated in the stack. This is to ensure that the object is destroyed as soon as the function is returned. Also this ensures that the correct memory allocation and destruction is performed.",
  },
  {
    id: 597,
    Question:
      "In java ______________ takes care of managing memory for objects dynamically.",
    Options: [
      "a) Free collector",
      "b) Dust collector",
      "c) Memory manager",
      "d) Garbage collector",
    ],
    Answer:
      "Answer: d\nExplanation: The garbage collector in java takes care of the memory allocations and their deletions dynamically. When an object is no more required then the garbage collector deletes the object and free up all the resources that were held by that object.",
  },
  {
    id: 598,
    Question:
      "Which operator can be used to free the memory allocated for an object in C++?",
    Options: ["a) Free()", "b) delete", "c) Unallocate", "d) Collect"],
    Answer:
      "Answer: b\nExplanation: The delete operator in C++ can be used to free the memory and resources held by an object. The function can be called explicitly whenever required. In C++ memory management must be done by the programmer. There is no automatic memory management in C++.",
  },
  {
    id: 599,
    Question:
      "Which among the following best describes member function overriding?",
    Options: [
      "a) Member functions having same name in base and derived classes",
      "b) Member functions having same name in base class only",
      "c) Member functions having same name in derived class only",
      "d) Member functions having same name and different signature inside main function",
    ],
    Answer:
      "Answer: a\nExplanation: The member function which is defined in base class and again in the derived class, is overridden by the definition given in the derived class. This is because the preference is given more to the local members. When derived class object calls that function, definition from the derived class is used.",
  },
  {
    id: 600,
    Question: "Which among the following is true?",
    Options: [
      "a) Inheritance must not be using when overriding is used",
      "b) Overriding can be implemented without using inheritance",
      "c) Inheritance must be done, to use overriding are overridden",
      "d) Inheritance is mandatory only if more than one functions",
    ],
    Answer:
      "Answer: c\nExplanation: The inheritance must be used in order to use function overriding. If inheritance is not used, the functions can only be overloaded. There must be a base class and a derived class to override the function of base class.",
  },
  {
    id: 601,
    Question: "Which is the correct condition for function overriding?",
    Options: [
      "a) The declaration must not be same in base and derived class",
      "b) The declaration must be exactly the same in base and derived class",
      "c) The declaration should have at least 1 same argument in declaration of base and derived class",
      "d) The declaration should have at least 1 different argument in declaration of base and derived class",
    ],
    Answer:
      "Answer: b\nExplanation: For a function to be over ridden, the declaration must be exactly the same. There must not be any different syntax used. This will ensure that the function to be overridden is only the one intended from to be overridden from the derived class.",
  },
  {
    id: 602,
    Question:
      "Exactly same declaration in base and derived class includes______________",
    Options: [
      "a) Only same name",
      "b) Only same return type and name",
      "c) Only same return type and argument list",
      "d) All the same return type, name and parameter list",
    ],
    Answer:
      "Answer: d\nExplanation: Declaration includes the whole prototype of the function. The return type name and the parameter list must be same in order to confirm that the function is same in derived and the base class. And hence can be overridden.",
  },
  {
    id: 603,
    Question:
      '5. Which among function will be overridden from the function defined in derived class below:<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> i<span class="sy4">;</span>\n\t<span class="kw4">void</span> show<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>i<span class="sy4">;</span> \n\t<span class="br0">}</span>\n\t<span class="kw4">void</span> print<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span> <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>i<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw2">class</span> B\n<span class="br0">{</span>\n\t<span class="kw4">int</span> j<span class="sy4">;</span>\n\t<span class="kw4">void</span> show<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>j<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) show()",
      "b) print()",
      "c) show() and print()",
      "d) Compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: The declaration must be exactly same in the derived class and base class. The derived class have defined show() function with exactly same declaration. This then shows that the function in base class is being overridden if show() is called from the object of class B.",
  },
  {
    id: 604,
    Question:
      "How to access the overridden method of base class from the derived class?",
    Options: [
      "a) Using arrow operator",
      "b) Using dot operator",
      "c) Using scope resolution operator",
      "d) Can’t be accessed once overridden",
    ],
    Answer:
      "Answer: c\nExplanation: Scope resolution operator :: can be used to access the base class method even if overridden. To access those, first base class name should be written followed by the scope resolution operator and then the method name.",
  },
  {
    id: 605,
    Question: "The functions to be overridden _____________",
    Options: [
      "a) Must be private in base class",
      "b) Must not be private base class",
      "c) Must be private in both derived and base class",
      "d) Must not be private in both derived and base class",
    ],
    Answer:
      "Answer: b\nExplanation: If the function is private in the base class, derived class won’t be able to access it. When the derived class can’t access the function to be overridden then it won’t be able to override it with any definition.",
  },
  {
    id: 606,
    Question:
      "Which language doesn’t support the method overriding implicitly?",
    Options: ["a) C++", "b) C#", "c) Java", "d) SmallTalk"],
    Answer:
      "Answer: b\nExplanation: The feature of method overriding is not provided in C#. To override the methods, one must use override or virtual keywords explicitly. This is done to remove accidental changes in program and unintentional overriding.",
  },
  {
    id: 607,
    Question: "In C# ____________________",
    Options: [
      "a) Non – virtual or static methods can’t be overridden",
      "b) Non – virtual and static methods only can be overridden",
      "c) Overriding is not allowed",
      "d) Overriding must be implemented using C++ code only",
    ],
    Answer:
      "Answer: a\nExplanation: The non-virtual and static methods can’t be overridden in C# language. The restriction is made from the language implicitly. Only the methods that are abstract, virtual or override can be overridden.",
  },
  {
    id: 608,
    Question: "In Delphi ______________",
    Options: [
      "a) Method overriding is done implicitly",
      "b) Method overriding is not supported",
      "c) Method overriding is done with directive override",
      "d) Method overriding is done with the directive virtually",
    ],
    Answer:
      "Answer: c\nExplanation: This is possible but only if the method to be overridden is marked as dynamic or virtual. It is inbuilt restriction of programming language. This is done to reduce the accidental or unintentional overriding.",
  },
  {
    id: 609,
    Question:
      "What should be used to call the base class method from the derived class if function overriding is used in Java?",
    Options: [
      "a) Keyword super",
      "b) Scope resolution",
      "c) Dot operator",
      "d) Function name in parenthesis",
    ],
    Answer:
      "Answer: a\nExplanation: The keyword super must be used to access base class members. Even when overriding is used, super must be used with the dot operator. The overriding is possible.",
  },
  {
    id: 610,
    Question: "In Kotlin, the function to be overridden must be ______________",
    Options: ["a) Private", "b) Open", "c) Closed", "d) Abstract"],
    Answer:
      "Answer: b\nExplanation: The function to be overridden must be open. This is a condition in Kotlin for any function to be overridden. This avoids accidental overriding.",
  },
  {
    id: 611,
    Question: "Abstract functions of a base class _________________",
    Options: [
      "a) Are overridden by the definition in same class",
      "b) Are overridden by the definition in parent class",
      "c) Are not overridden generally",
      "d) Are overridden by the definition in derived class",
    ],
    Answer:
      "Answer: d\nExplanation: The functions declared to be abstract in base class are redefined in derived classes. That is, the functions are overridden by the definitions given in the derived classes. This must be done to give at least one definition to each undefined function.",
  },
  {
    id: 612,
    Question:
      "If virtual functions are defined in the base class then _______________",
    Options: [
      "a) It is not necessary for derived classes to override those functions",
      "b) It is necessary for derived classes to override those functions",
      "c) Those functions can never be derived",
      "d) Those functions must be overridden by all the derived classes",
    ],
    Answer:
      "Answer: a\nExplanation: The derived classes doesn’t have to redefine and override the base class functions. If one definition is already given it is not mandatory for any derived class to override those functions. The base class definition will be used.",
  },
  {
    id: 613,
    Question: "Which feature of OOP is exhibited by the function overriding?",
    Options: [
      "a) Inheritance",
      "b) Abstraction",
      "c) Polymorphism",
      "d) Encapsulation",
    ],
    Answer:
      "Answer: c\nExplanation: The polymorphism feature is exhibited by function overriding. Polymorphism is the feature which basically defines that same named functions can have more than one functionalities.",
  },
  {
    id: 614,
    Question: "What are the constant member functions?",
    Options: [
      "a) Functions which doesn’t change value of calling object",
      "b) Functions which doesn’t change value of any object inside definition",
      "c) Functions which doesn’t allow modification of any object of class",
      "d) Functions which doesn’t allow modification of argument objects",
    ],
    Answer:
      "Answer: a\nExplanation: The constant member functions are a special type of member functions. These are intended to restrict any modification in to the values of object which is used to invoke that function. This is done to ensure that there are no accidental modifications to the object.",
  },
  {
    id: 615,
    Question:
      "Which keyword must be used to declare a member function as a constant member function?",
    Options: ["a) Constant", "b) Const", "c) FunctionConst", "d) Unchanged"],
    Answer:
      "Answer: b\nExplanation: The keyword const is provided in most of the programming languages. This indicates that the member on which it is specified remains constant with the respective values of members. The keyword must be mentioned so as to declare a member function to be constant.",
  },
  {
    id: 616,
    Question: "Which objects can call the const functions?",
    Options: [
      "a) Only const objects",
      "b) Only non-const objects",
      "c) Both const and non-const objects",
      "d) Neither const not non-const objects",
    ],
    Answer:
      "Answer: c\nExplanation: All the objects of a class can call const functions for its use. Const objects can call the const functions to since those values are already constant. And the non- const objects can call the const functions to keep their values constant.",
  },
  {
    id: 617,
    Question: "Non-const functions _______________________",
    Options: [
      "a) Can be called only from non-const object",
      "b) Can be called only from const object",
      "c) Can be called both by const and non-const object",
      "d) Can’t be called with object",
    ],
    Answer:
      "Answer: a\nExplanation: The non-const functions are able to modify the values of object which called the function. So only the non-const functions can be called. If const object is used then the compiler produces an error as the const object is being given to a function which can modify its values.",
  },
  {
    id: 618,
    Question: "Which is the correct condition on const member functions?",
    Options: [
      "a) Const member functions can’t call non-const member functions",
      "b) Const member functions can’t call any other function",
      "c) Const member functions can call only the functions which are neither const nor non-const",
      "d) Const member functions can call only data members of call not member functions",
    ],
    Answer:
      "Answer: a\nExplanation: The const member functions are restricted to call any other non-const member functions. This is to ensure that the const function doesn’t have any code that might modify the calling object.",
  },
  {
    id: 619,
    Question:
      "If a const object calls a non-const member function then ____________________",
    Options: [
      "a) Run time error may get produced",
      "b) Compile time error may get produced",
      "c) Either compile time or run time error is produced",
      "d) The program can’t be compiled",
    ],
    Answer:
      "Answer: b\nExplanation: The program gets compiled but produces an error. The error is produced because a constant value is being changed. Even if there is no code that can change any object value, but non-const member functions are assumed to change the values.",
  },
  {
    id: 620,
    Question: "Can a constructor function be constant?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if permissions are given",
      "c) No, because objects are not involved",
      "d) No, never",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors can’t be made const. This is to ensure that the constructor is capable of initializing the values to the members of the object. If it is made constant then it won’t be able to initialize any data member values.",
  },
  {
    id: 621,
    Question:
      "How is it possible to have both const and non-const version of a function?",
    Options: [
      "a) Function overriding",
      "b) Function prototyping",
      "c) Function overloading",
      "d) Function declaring",
    ],
    Answer:
      "Answer: a\nExplanation: The functions in a program can be made both const and non-const. This feature is made available to make programming more flexible. This ensures the security too as we can call const function whenever required.",
  },
  {
    id: 622,
    Question:
      "When both the const and non-const version of functions are required?",
    Options: [
      "a) Return value have to be different in const",
      "b) Return value have to be same in const",
      "c) Return values have to be ignored",
      "d) Return values have to be suppressed",
    ],
    Answer:
      "Answer: c\nExplanation: The functions can be declared const and non-const in the same program. The technique used is function overloading. We can define a const function and then a non-const version of same function using overloading.",
  },
  {
    id: 623,
    Question: "If a function is to be made const, which is the correct syntax?",
    Options: [
      "a) const functionName(parameters);",
      "b) const returnType functionName(parameters);",
      "c) const functionName(returnType)(Parameters);",
      "d) const (functionName(parameters));",
    ],
    Answer:
      "Answer: a\nExplanation: The return values can help to overload the functions. Also, this will allow us to use a non-const function to be called inside both the const and non-const version of functions.",
  },
  {
    id: 624,
    Question:
      "Functions which differ in const-ness are considered ______________________",
    Options: [
      "a) To have same signature",
      "b) To have different signature",
      "c) To produce compile time error",
      "d) To produce runtime error",
    ],
    Answer:
      "Answer: b\nExplanation: The function declaration must contain the keyword const. The const keyword makes the function const type. The usual function declaration can be given followed by the keyword. The keyword const can be given after the declaration of function and before definition.",
  },
  {
    id: 625,
    Question:
      "If const version of a function when overloading is used, the function ___________________",
    Options: [
      "a) Returns reference to object",
      "b) Returns volatile reference",
      "c) Returns mutable reference",
      "d) Returns const reference",
    ],
    Answer:
      "Answer: b\nExplanation: The functions are considered to have different signature. This is because the const-ness also defines the type of function or the working of functions. And hence the functions can be considered different. This is the reason that we can use function overloading for const and non-const version of same function.",
  },
  {
    id: 626,
    Question: "Which among the following is recommended for const functions?",
    Options: [
      "a) Const function use should be reduced in a program",
      "b) Const function use should be more in a program",
      "c) Const function use should not matter in a program",
      "d) Const function use should be able to modify the values",
    ],
    Answer:
      "Answer: d\nExplanation: The function returns a const reference. This is to ensure that the value of object calling the function is not modified. This is a security feature.",
  },
  {
    id: 627,
    Question:
      "Use of const member function in a program _________________________",
    Options: [
      "a) Is mandatory, always",
      "b) Is optional, always",
      "c) Is mandatory, if objects are used",
      "d) Is optional, if const objects are used",
    ],
    Answer:
      "Answer: b\nExplanation: The const member functions should be used more in a program. The reason behind is to ensure there is no accidental modification of data of object. Also to ensure any unintended modification which may result in unexpected termination of program.",
  },
  {
    id: 628,
    Question: "Which is private member functions access scope?",
    Options: [
      "a) Member functions which can only be used within the class",
      "b) Member functions which can used outside the class",
      "c) Member functions which are accessible in derived class",
      "d) Member functions which can’t be accessed inside the class",
    ],
    Answer:
      "Answer: a\nExplanation: The member functions can be accessed inside the class only if they are private. The access is scope is limited to ensure the security of the private members and their usage.",
  },
  {
    id: 629,
    Question: "Which among the following is true?",
    Options: [
      "a) The private members can’t be accessed by public members of the class",
      "b) The private members can be accessed by public members of the class",
      "c) The private members can be accessed only by the private members of the class",
      "d) The private members can’t be accessed by the protected members of the class",
    ],
    Answer:
      "Answer: b\nExplanation: The private members are accessible within the class. There is no restriction on use of private members by public or protected members. All the members can access the private member functions of the class.",
  },
  {
    id: 630,
    Question: "Which member can never be accessed by inherited classes?",
    Options: [
      "a) Private member function",
      "b) Public member function",
      "c) Protected member function",
      "d) All can be accessed",
    ],
    Answer:
      "Answer: a\nExplanation: The private member functions can never be accessed in the derived classes. The access specifiers is of maximum security that allows only the members of self class to access the private member functions.",
  },
  {
    id: 631,
    Question:
      "Which syntax among the following shows that a member is private in a class?",
    Options: [
      "a) private: functionName(parameters)",
      "b) private(functionName(parameters))",
      "c) private functionName(parameters)",
      "d) private::functionName(parameters)",
    ],
    Answer:
      "Answer: c\nExplanation: The function declaration must contain private keyword follower by the return type and function name. Private keyword is followed by normal function declaration.",
  },
  {
    id: 632,
    Question:
      "If private member functions are to be declared in C++ then _____________",
    Options: [
      "a) private: <all private members>",
      "b) private <member name>",
      "c) private(private member list)",
      "d) private :- <private members>",
    ],
    Answer:
      "Answer: a\nExplanation: The private members doesn’t have to have the keyword with each private member. We only have to specify the keyword private followed by single colon and then private member’s are listed.",
  },
  {
    id: 633,
    Question: "In java, which rule must be followed?",
    Options: [
      "a) Keyword private preceding list of private member’s",
      "b) Keyword private with a colon before list of private member’s",
      "c) Keyword private with arrow before each private member",
      "d) Keyword private preceding each private member",
    ],
    Answer:
      "Answer: d\nExplanation: The private keyword must be mentioned before each private member. Unlike the rule in C++ to specify private once and list all other private member’s, in java all member declarations must be preceded by the keyword private.",
  },
  {
    id: 634,
    Question: "How many private member functions are allowed in a class?",
    Options: [
      "a) Only 1",
      "b) Only 7",
      "c) Only 255",
      "d) As many as required",
    ],
    Answer:
      "Answer: d\nExplanation: There are no conditions applied on the number of private member functions that can be declared in a class. Though the system may restrict use of too many functions depending on memory.",
  },
  {
    id: 635,
    Question: "How to access a private member function of a class?",
    Options: [
      "a) Using object of class",
      "b) Using object pointer",
      "c) Using address of member function",
      "d) Using class address",
    ],
    Answer:
      "Answer: c\nExplanation: Even the private member functions can be called outside the class. This is possible if address of the function is known. We can use the address to call the function outside the class.",
  },
  {
    id: 636,
    Question: "Private member functions ____________",
    Options: [
      "a) Can’t be called from enclosing class",
      "b) Can be accessed from enclosing class",
      "c) Can be accessed only if nested class is private",
      "d) Can be accessed only if nested class is public",
    ],
    Answer:
      "Answer: a\nExplanation: The nested class members can’t be accessed in the enclosed class even though other members can be accessed. This is to ensure the class members security and not to go against the rules of private members.",
  },
  {
    id: 637,
    Question:
      "Which function among the following can’t be accessed outside the class in java in same package?",
    Options: [
      "a) public void show()",
      "b) void show()",
      "c) protected show()",
      "d) static void show()",
    ],
    Answer:
      "Answer: c\nExplanation: The protected members are available within the class. And are also available in derived classes. But these members are treated as private members for outside the class and inheritance structure. Hence can’t be accessed.",
  },
  {
    id: 638,
    Question:
      "If private members are to be called outside the class, which is a good alternative?",
    Options: [
      "a) Call a public member function which calls private function",
      "b) Call a private member function which calls private function",
      "c) Call a protected member function which calls private function",
      "d) Not possible",
    ],
    Answer:
      "Answer: a\nExplanation: The private member functions can be accessed within the class. A public member function can be called which in turn calls the private member function. This maintains the security and adheres to the rules of private members.",
  },
  {
    id: 639,
    Question: "Which error will be produced if private members are accessed?",
    Options: [
      "a) Can’t access private message",
      "b) Code unreachable",
      "c) Core dumped",
      "d) Bad code",
    ],
    Answer:
      "Answer: b\nExplanation: If private functions get accessed even by the parent class that will violate the rules of private members. If the functions can be accessed then the derived class security is hindered.",
  },
  {
    id: 640,
    Question: "Can main() function be made private?",
    Options: [
      "a) Yes, always",
      "b) Yes, if program doesn’t contain any classes",
      "c) No, because main function is user defined",
      "d) No, never",
    ],
    Answer:
      "Answer: a\nExplanation: The private members access from outside the class produce an error. The error states that the code at some line can’t access the private members. And denies the access terminating the program.",
  },
  {
    id: 641,
    Question:
      "If a function in java is declared private then it __________________",
    Options: [
      "a) Can’t access the standard output",
      "b) Can access the standard output",
      "c) Can’t access any output stream",
      "d) Can access only the output streams",
    ],
    Answer:
      "Answer: d\nExplanation: The reason given in option “No, because main function is user defined” is wrong. The proper reason that the main function should not be private is that it should be accessible in whole program. This makes the program flexible.",
  },
  {
    id: 642,
    Question: "What are public member functions?",
    Options: [
      "a) Functions accessible outside the class but not in derived class",
      "b) Functions accessible outside the class directly",
      "c) Functions accessible everywhere using object of class",
      "d) Functions that can’t be accessed outside the class",
    ],
    Answer:
      "Answer: c\nExplanation: The most suitable definition would be that public member functions are accessible everywhere using object of the class. If derived classes are using those, derived class object can be used to call those functions.",
  },
  {
    id: 643,
    Question: "Which among the following is true for public member functions?",
    Options: [
      "a) Public member functions doesn’t have a return type",
      "b) Public member functions doesn’t have any security",
      "c) Public member functions are declared outside the class",
      "d) Public member functions can be called using object of class",
    ],
    Answer:
      "Answer: d\nExplanation: The public member functions can be called using object of the class. The members can’t be declared outside the class as those would become non-member functions of the class. The functions have security as those can be accessed using the class object only.",
  },
  {
    id: 644,
    Question:
      "Which type of member functions get inherited in the same specifier in which the inheritance is done? (If private inheritance is used, those become private and if public used, those become public)",
    Options: [
      "a) Private member functions",
      "b) Protected member functions",
      "c) Public member functions",
      "d) All member functions",
    ],
    Answer:
      "Answer: c\nExplanation: The public member functions gets into the same specifier in which the inheritance is done. If protected members are involved in public inheritance, still those remain protected in the derived class but public members become public on public inheritance and protected in protected inheritance.",
  },
  {
    id: 645,
    Question:
      "Which syntax among the following is correct for public member functions?",
    Options: [
      "a) public::void functionName(parameters)",
      "b) public void functionName(parameters)",
      "c) public(void functionName(parameters))",
      "d) public:-void functionName(Parameters)",
    ],
    Answer:
      "Answer: b\nExplanation: The public member functions declaration must be mentioned with the keyword public. The syntax given is used in java. Keyword public is followed by the usual function declaration.",
  },
  {
    id: 646,
    Question:
      "Which syntax is applicable to declare public member functions in C++?",
    Options: [
      "a) public: <function declaration>",
      "b) public(<function declaration>)",
      "c) public void <function declaration>",
      "d) public::<function declaration>",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax in C++ must contain the public keyword followed by a colon. Thereafter, all the public members can be declared. But in few other language, public have to be mentioned explicitly with each member.",
  },
  {
    id: 647,
    Question: "In java, which rule among the following is applicable?",
    Options: [
      "a) Keyword public can’t be preceded with all the public members",
      "b) Keyword public must be preceded with all the public members",
      "c) Keyword public must be post mentioned the function declaration",
      "d) Keyword public is not mandatory",
    ],
    Answer:
      "Answer: b\nExplanation: The public members in java must be preceded with the keyword public. It must be mentioned with each public member, unlike C++ where we mention it only once. In java, each member must have explicit declaration of specifier type.",
  },
  {
    id: 648,
    Question: "How many public members are allowed in a class?",
    Options: [
      "a) Only 1",
      "b) At most 7",
      "c) Exactly 3",
      "d) As many as required",
    ],
    Answer:
      "Answer: d\nExplanation: The number of public members that can be defined in a class doesn’t have any limit. Though the programmer should not use too many functions, instead should use another class for more specific functions to reduce the readability complexity.",
  },
  {
    id: 649,
    Question: "Which is not a proper way to access public members of a class?",
    Options: [
      "a) Using object pointer with arrow operator",
      "b) Using object of class in main function",
      "c) Using object of class with arrow operator",
      "d) Using object anywhere in the program",
    ],
    Answer:
      "Answer: c\nExplanation: The public members can be accessed anywhere in the program using the object of the class. And if object pointer is used, then arrow operator is used to access class members. If normal object is used with arrow operator, an error will be generated.",
  },
  {
    id: 650,
    Question: "Which call is correct for public members of a nested class?",
    Options: [
      "a) Can be called from object of enclosing class",
      "b) Can be called within enclosing class only with direct names",
      "c) Direct names should be used for the nested classes",
      "d) Only with help of nested class object pointer",
    ],
    Answer:
      "Answer: a\nExplanation: The closest definition is that any public member function of the nested class can be accessed with the help of enclosing class object. The nested class object pointer can be used only within the enclosing class. It’s not mandatory to use the members of nested class only within the enclosing class.",
  },
  {
    id: 651,
    Question:
      "Which public function call among the following is correct outside the class, if return type is void (C++)?",
    Options: [
      "a) object.void functionName(parameters);",
      "b) object.functionName(parameters);",
      "c) object.functionName void (parameters)",
      "d) object.void functionName();",
    ],
    Answer:
      "Answer: b\nExplanation: The condition given says that there is no return type hence we can call the function directly. The object name should be mentioned with a dot operator to access its class members. Then the function name with parameters, if required, can be given.",
  },
  {
    id: 652,
    Question:
      "If public members are to be restricted from getting inherited from the subclass of the class containing that function, which alternative is best?",
    Options: [
      "a) Make the function private",
      "b) Use private inheritance",
      "c) Use public inheritance",
      "d) Use protected inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: If private inheritance is used then the class containing the function will be able to use the function with rules of whichever specifier is used. Then the derived class makes those function the private members of itself. This restricts the public members of parent class from further inheritance.",
  },
  {
    id: 653,
    Question:
      "If a class have a public member function and is called directly in the main function then ___________________________",
    Options: [
      "a) Undeclared function error will be produced",
      "b) Out of memory error is given",
      "c) Program gives warning only",
      "d) Program shut down the computer",
    ],
    Answer:
      "Answer: b\nExplanation: The public members of the base class can be accessed from the derived class object only if public inheritance is used. If protected or private inheritance is used then those members become public/protected in derived class and hence won’t be able to be called from object of the derived class.",
  },
  {
    id: 654,
    Question: "All the public member functions ___________________",
    Options: [
      "a) Can’t access the private members of a class",
      "b) Can’t access the protected members of a class",
      "c) Can access only public members of a class",
      "d) Can access all the member of its class",
    ],
    Answer:
      "Answer: a\nExplanation: If the function is called directly without using any object then the compiler doesn’t gets to know that the function have to be called from a specific class. And if there are no global or in-scope function with same name then the compiler produces an error stating that the called function is undeclared.",
  },
  {
    id: 655,
    Question: "What is an exception?",
    Options: [
      "a) Problem arising during compile time",
      "b) Problem arising during runtime",
      "c) Problem in syntax",
      "d) Problem in IDE",
    ],
    Answer:
      "Answer: b\nExplanation: The problems that might occur during execution of a program are known as exceptions. The exceptions are unexpected sometimes and can be predicted. Also, the exceptions should be always considered for a better program.",
  },
  {
    id: 656,
    Question: "Why do we need to handle exceptions?",
    Options: [
      "a) To prevent abnormal termination of program",
      "b) To encourage exception prone program",
      "c) To avoid syntax errors",
      "d) To save memory",
    ],
    Answer:
      "Answer: a\nExplanation: The exceptions should be handled to prevent any abnormal termination of a program. The program should keep running even if it gets interrupted in between. The program should preferable show the error occurred and then retry the process or just continue the program further.",
  },
  {
    id: 657,
    Question: "An exception may arise when _______________",
    Options: [
      "a) Input is fixed",
      "b) Input is some constant value of program",
      "c) Input given is invalid",
      "d) Input is valid",
    ],
    Answer:
      "Answer: c\nExplanation: The exceptions may arise because the input given by the user might not be of the same type that a program can manage. If the input is invalid the program gets terminated.",
  },
  {
    id: 658,
    Question:
      "If a file that needs to be opened is not found in the target location then _____________",
    Options: [
      "a) Exception will be produced",
      "b) Exceptions are not produced",
      "c) Exception might get produced because of syntax",
      "d) Exceptions are not produced because of logic",
    ],
    Answer:
      "Answer: a\nExplanation: The exceptions are produced when anything unexpected happened. The program might not be able to find a file in the target location and hence program produces an exceptions. The exception produced, then terminates the program.",
  },
  {
    id: 659,
    Question: "Which is the universal exception handler class?",
    Options: ["a) Object", "b) Math", "c) Errors", "d) Exceptions"],
    Answer:
      "Answer: d\nExplanation: Any type of exception can be handled by using class Exceptions. An object of this class is created which can manipulate the exception data. The data can be used to display the error or to run the program further based on error produced.",
  },
  {
    id: 660,
    Question:
      "What are two exception classes in hierarchy of java exceptions class?",
    Options: [
      "a) Runtime exceptions only",
      "b) Compile time exceptions only",
      "c) Runtime exceptions and other exceptions",
      "d) Other exceptions",
    ],
    Answer:
      "Answer: c\nExplanation: The exceptions class is having two other derived classes which are of runtime exception handler and for other type of exceptions handling. The runtime exception handler is used to handle the exceptions produced during run time and same with case of other exceptions.",
  },
  {
    id: 661,
    Question:
      "Which are the two blocks that are used to check error and handle the error?",
    Options: [
      "a) Try and catch",
      "b) Trying and catching",
      "c) Do and while",
      "d) TryDo and Check",
    ],
    Answer:
      "Answer: a\nExplanation: Two blocks that are used to check for errors and to handle the errors are try and catch block. The code which might produce some exceptions is placed inside the try block and then the catch block is written to catch the error that is produced. The error message or any other processing can be done in catch block if the error is produced.",
  },
  {
    id: 662,
    Question: "How many catch blocks can a single try block can have?",
    Options: [
      "a) Only 1",
      "b) Only 2",
      "c) Maximum 127",
      "d) As many as required",
    ],
    Answer:
      "Answer: a\nExplanation: The try block may or may not have any catch block. But a catch block can’t be there in a program if there is no try block. It is like else-block can only be written if and only if if-block is present in the program.",
  },
  {
    id: 663,
    Question: "Which among the following is not a method of Throwable class?",
    Options: [
      "a) public String getMessage()",
      "b) public Throwable getCause()",
      "c) public Char toString()",
      "d) public void printStackTrace()",
    ],
    Answer:
      "Answer: d\nExplanation: There is no limit on the number of catch blocks corresponding to a try block. This is because the error can be of any type and for each type, a new catch block can be defined. This is to make sure all type of exceptions can be handled.",
  },
  {
    id: 664,
    Question: "To catch the exceptions ___________________",
    Options: [
      "a) An object must be created to catch the exception",
      "b) A variable should be created to catch the exception",
      "c) An array should be created to catch all the exceptions",
      "d) A string have to be created to store the exception",
    ],
    Answer:
      "Answer: c\nExplanation: Actually all the functions are available in throwable class. But the return type given in the option is wrong. The function toString returns string value. Hence the return type must be a String and not a char.",
  },
  {
    id: 665,
    Question: "Multiple catch blocks __________________",
    Options: [
      "a) Are mandatory for each try block",
      "b) Can be combined into a single catch block",
      "c) Are not possible for a try block",
      "d) Can never be associated with a single try block",
    ],
    Answer:
      "Answer: a\nExplanation: The object must be created of a specific class of which the error has occurred. If the type of error is unknown then we can use an object of class Exceptions. This object will be able to handle any kind of exception that a program might produce.",
  },
  {
    id: 666,
    Question:
      "Which symbol should be used to separate the type of exception handler classes in a single catch block?",
    Options: ["a) ?", "b) ,", "c) –", "d) |"],
    Answer:
      "Answer: b\nExplanation: The separate catch blocks for a single try block can be combined into a single catch block. All type of errors can be then handled in s single block. The type still have to be specified for the errors that might be produced.",
  },
  {
    id: 667,
    Question: "Which class is used to handle the input and output exceptions?",
    Options: [
      "a) InputOutput",
      "b) InputOutputExceptions",
      "c) IOExceptions",
      "d) ExceptionsIO",
    ],
    Answer:
      "Answer: d\nExplanation: A pipe symbol can be used to separate different type of exceptions. The exceptions should always be given in proper sequence to ensure that no code remains unreachable. If not done properly the code might never be used in a program.",
  },
  {
    id: 668,
    Question: "Why do we use finally block?",
    Options: [
      "a) To execute the block if exception occurred",
      "b) To execute a code when exception is not occurred",
      "c) To execute a code whenever required",
      "d) To execute a code with each and every run of program",
    ],
    Answer:
      "Answer: c\nExplanation: There is a specific class to handle each type of exceptions that might be produced in a program. The input and output exceptions can be handled by an object of class IOExcceptions. This class handles all type of input and output exceptions.",
  },
  {
    id: 669,
    Question: "Which among the following is true for class exceptions?",
    Options: [
      "a) Only base class can give rise to exceptions",
      "b) Only derived class can give rise to exceptions",
      "c) Either base class or derived class may produce exceptions",
      "d) Both base class and derived class may produce exceptions",
    ],
    Answer:
      "Answer: d\nExplanation: It’s not mandatory that either base class or derived class can give rise to exceptions. The exceptions might get produced from any class. The exceptions depends on code.",
  },
  {
    id: 670,
    Question: "If both base and derived class caught exceptions ______________",
    Options: [
      "a) Then catch block of derived class must be defined before base class",
      "b) Then catch block of base class must be defined before the derived class",
      "c) Then catch block of base and derived classes doesn’t matter",
      "d) Then catch block of base and derived classes are not mandatory to be defined",
    ],
    Answer:
      "Answer: a\nExplanation: It is a condition for writing the catch blocks for base and derived classes. It is mandatory to write derived class catch block first because the errors produced by the derived class must be handled first.",
  },
  {
    id: 671,
    Question: "Which among the following is true?",
    Options: [
      "a) If catch block of base class is written first, it is compile time error",
      "b) If catch block of base class is written first, it is run time error",
      "c) If catch block of base class is written first, derived class catch block can’t be reached",
      "d) If catch block of base class is written first, only derived class catch block is executed",
    ],
    Answer:
      "Answer: c\nExplanation: If the catch block of the base class is defined first and then the derived class catch block is given. The code becomes unreachable. Hence the derived class catch block must be written first.",
  },
  {
    id: 672,
    Question:
      "The catching of base class exception ___________________________ in java.",
    Options: [
      "a) After derived class is not allowed by compiler",
      "b) Before derived class is not allowed by compiler",
      "c) Before derived class is allowed",
      "d) After derived class can’t be done",
    ],
    Answer:
      "Answer: b\nExplanation: The catching of base class exception before derived class is not allowed in java. The compiler itself doesn’t allow this declaration. It produces an error.",
  },
  {
    id: 673,
    Question:
      "If catching of base class exception is done before derived class in C++ ________________",
    Options: [
      "a) It gives compile time error",
      "b) It doesn’t run the program",
      "c) It may give warning but not error",
      "d) It always gives compile time error",
    ],
    Answer:
      "Answer: c\nExplanation: The compiler in C++ doesn’t identify this as compile time error and allows the execution of the program. But, the compiler may give some warning related to the catch block sequence or code unreachable.",
  },
  {
    id: 674,
    Question: "How many catch blocks can a class have?",
    Options: ["a) Only 1", "b) 2", "c) 3", "d) As many as required"],
    Answer:
      "Answer: d\nExplanation: There are many type of exceptions that may arise while running a code. And each catch block can handle only one exception. Hence there can be as many catch blocks as required.",
  },
  {
    id: 675,
    Question:
      "Since which version of java is multiple exception catch was made possible?",
    Options: ["a) Java 4", "b) Java 5", "c) Java 6", "d) Java 7"],
    Answer:
      "Answer: d\nExplanation: None of the languages used to support multiple exception catch in a single catch block. Since java 7 the feature was added to catch more than one exceptions in one catch block.",
  },
  {
    id: 676,
    Question:
      "To catch more than one exception in one catch block, how are the exceptions separated in the syntax?",
    Options: ["a) Vertical bar", "b) Hyphen", "c) Plus", "d) Modulus"],
    Answer:
      "Answer: a\nExplanation: Just the way we separate the arguments in a function definition using comma. Here we separate the exceptions by using a vertical bar or we call it pipe symbol sometimes. This is just a convention followed to separate different exception list.",
  },
  {
    id: 677,
    Question:
      "If a catch block accepts more than one exceptions then __________________",
    Options: [
      "a) The catch parameters are not final",
      "b) The catch parameters are final",
      "c) The catch parameters are not defined",
      "d) The catch parameters are not used",
    ],
    Answer:
      "Answer: b\nExplanation: The catch parameters are made final. This is to ensure that the parameters are not changed inside the catch block. Hence those retain their values.",
  },
  {
    id: 678,
    Question:
      "Which among the following handles the undefined class in program?",
    Options: [
      "a) ClassNotFound",
      "b) NoClassException",
      "c) ClassFoundException",
      "d) ClassNotFoundException",
    ],
    Answer:
      "Answer: d\nExplanation: It is the exception handler that handles the exceptions when the class used is not found in the program. This is done to handle all the undefined class exceptions. This can be due to a command line error.",
  },
  {
    id: 679,
    Question: "If classes produce some exceptions, then ______________________",
    Options: [
      "a) Their respective catch block must be defined",
      "b) Their respective catch blocks are not mandatory",
      "c) Their catch blocks should be defined inside main function",
      "d) Their catch blocks must be defined at the end of program",
    ],
    Answer:
      "Answer: a\nExplanation: The catch blocks must be defined. This is to ensure that all the exceptions related to the classes are handled by the program code and the program doesn’t terminate unexpectedly.",
  },
  {
    id: 680,
    Question: "Which among the following is true?",
    Options: [
      "a) Only the base class catch blocks are important",
      "b) Only the derived class catch blocks are important",
      "c) Both the base and derived class catch blocks are important",
      "d) If base and derived classes both produce exceptions, program doesn’t run",
    ],
    Answer:
      "Answer: c\nExplanation: The purpose of exception handling is to handle the unexpected errors in the program. If base class might produce some error then its catch block must be given and if the derived class might produce some error then it must be given a specific catch block too.",
  },
  {
    id: 681,
    Question:
      "Which is the necessary condition to define the base and derived class catch blocks?",
    Options: [
      "a) Base class catch should be defined first",
      "b) Derived class catch should be defined first",
      "c) Catch block for both the classes must not be defined",
      "d) Catch block must be defined inside main function",
    ],
    Answer:
      "Answer: b\nExplanation: The derived class catch blocks must be defined prior to the base class catch block. This is to ensure that all the catch boxes are reachable. If not done, the code might become unreachable which in turn makes the program prone to errors.",
  },
  {
    id: 682,
    Question:
      "Which condition among the following might result in memory exception?",
    Options: [
      "a) False if conditions",
      "b) Nested if conditions that are all false",
      "c) Infinite loops",
      "d) Loop that runs exactly 99 times",
    ],
    Answer:
      "Answer: b\nExplanation: There is no specific condition that states that only base class catch box can handle more than one exception in single box. Even the derived class catch clocks can handle more than one exceptions.",
  },
  {
    id: 683,
    Question:
      "Which among the following best defines static variables members?",
    Options: [
      "a) Data which is allocated for each object separately",
      "b) Data which is common to all the objects of a class",
      "c) Data which is common to all the classes",
      "d) Data which is common to a specific method",
    ],
    Answer:
      "Answer: b\nExplanation: The static data members are made common to all the object of a class. They doesn’t change from object to object. Those are property of class rather than of any individual object.",
  },
  {
    id: 684,
    Question: "Which keyword should be used to declare static variables?",
    Options: ["a) static", "b) stat", "c) common", "d) const"],
    Answer:
      "Answer: a\nExplanation: The keyword used to declare static variables is static. This is must be used while declaring the static variables. The compiler can make variables static if and only if they are mentioned with static keyword.",
  },
  {
    id: 685,
    Question:
      "Any changes made to static data member from one member function _____________",
    Options: [
      "a) Is reflected to only the corresponding object",
      "b) Is reflected to all the variables in a program",
      "c) Is reflected to all the objects of that class",
      "d) Is constant to that function only",
    ],
    Answer:
      "Answer: c\nExplanation: The changes made from any function to static data member will be a common change for all the other objects also. If the change is made with respect to one object and change is printed from another object, the result will be same.",
  },
  {
    id: 686,
    Question: "Which is the correct syntax for declaring static data member?",
    Options: [
      "a) static mamberName dataType;",
      "b) dataType static memberName;",
      "c) memberName static dataType;",
      "d) static dataType memberName;",
    ],
    Answer:
      "Answer: d\nExplanation: The syntax must firstly be mentioned with the keyword static. Then the data type of the member followed by the member name should be given. This is general form of declaring static data members.",
  },
  {
    id: 687,
    Question: "The static data member ______________________",
    Options: [
      "a) Must be defined inside the class",
      "b) Must be defined outside the class",
      "c) Must be defined in main function",
      "d) Must be defined using constructor",
    ],
    Answer:
      "Answer: b\nExplanation: The static data members must be defined outside the class. Since these are common to all the objects and should be created only once, they must not be defined in the constructor.",
  },
  {
    id: 688,
    Question: "The syntax for defining the static data members is __________",
    Options: [
      "a) dataType className :: memberName = value;",
      "b) dataType className : memberName = value;",
      "c) dataType className . memberName = value;",
      "d) dataType className -> memberName =value;",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax doesn’t contain the static keyword. Since it is already been declared as static inside the class. The data type and the corresponding class name must be there to allocate the variable to a class. The value is assigned using scope resolution operator for the member name.",
  },
  {
    id: 689,
    Question:
      "If static data members have to be used inside a class, those member functions _______________",
    Options: [
      "a) Must not be static member functions",
      "b) Must not be member functions",
      "c) Must be static member functions",
      "d) Must not be member function of corresponding class",
    ],
    Answer:
      "Answer: c\nExplanation: Only the static member functions can access the static data members. The definition of static members is made common and hence the member function should be capable of manipulating the static data members.",
  },
  {
    id: 690,
    Question: "The static data member __________________________",
    Options: [
      "a) Can be accessed directly",
      "b) Can be accessed with any public class name",
      "c) Can be accessed with dot operator",
      "d) Can be accessed using class name if not using static member function",
    ],
    Answer:
      "Answer: d\nExplanation: The static data members can be accessed using the class name also. If the member functions is not used or is not to be used then we can call the static data members directly by using its corresponding class name.",
  },
  {
    id: 691,
    Question:
      "Which among the following is the correct syntax to access static data member without using member function?",
    Options: [
      "a) className -> staticDataMember;",
      "b) className :: staticDataMember;",
      "c) className : staticDataMember;",
      "d) className . staticDataMember;",
    ],
    Answer:
      "Answer: b\nExplanation: For accessing the static data members without using the static member functions, the class name can be used. The class name followed by scope resolution, indicating that static data members is member of this class, and then the data member name.",
  },
  {
    id: 692,
    Question: "Which data members among the following are static by default?",
    Options: ["a) extern", "b) integer", "c) const", "d) void"],
    Answer:
      "Answer: c\nExplanation: The const data members of any class are made static by default. This is an implicit meaning given by the compiler to the member. Since const values won’t change from object to object, hence are made static instead.",
  },
  {
    id: 693,
    Question:
      '11. What is the output of the following program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> Test\n<span class="br0">{</span>\n\t<span class="kw2">private</span><span class="sy4">:</span>\t<span class="kw4">static</span> <span class="kw4">int</span> x<span class="sy4">;</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> <span class="kw4">static</span> <span class="kw4">void</span> fun<span class="br0">(</span><span class="br0">)</span>\n\t<span class="br0">{</span>\n\t\t<span class="kw3">cout</span> <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> <span class="sy2">++</span>x <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> “ ”<span class="sy4">;</span>\n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw4">int</span> Test <span class="sy4">::</span> <span class="me2">x</span> <span class="sy1">=</span><span class="nu0">20</span><span class="sy4">;</span>\n<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tTest x<span class="sy4">;</span>\n\tx.<span class="me1">fun</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n\tx.<span class="me1">fun</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: ["a) 20 22", "b) 20 21", "c) 21 22", "d) 22 23"],
    Answer:
      "Answer: c\nExplanation: The static member is initialized with 20. Then the function is called which used pre-increment and printed value of x. The function is called twice. Hence we get 21 22 as output.",
  },
  {
    id: 694,
    Question:
      "Whenever any static data member is declared in a class ______________________",
    Options: [
      "a) Only one copy of the data is created",
      "b) New copy for each object is created",
      "c) New memory location is allocated with each object",
      "d) Only one object uses the static data",
    ],
    Answer:
      "Answer: a\nExplanation: The static data is same for all the objects. Instead of creating the same data each time an object is created, the compiler created only one data which is accessed by all the objects of the class. This saves memory and reduces redundancy.",
  },
  {
    id: 695,
    Question:
      "If object of class are created, then the static data members can be accessed ____________",
    Options: [
      "a) Using dot operator",
      "b) Using arrow operator",
      "c) Using colon",
      "d) Using dot or arrow operator",
    ],
    Answer:
      "Answer: d\nExplanation: The static data members can be accessed in usual way as other members are accessed using the objects. The dot operator is used generally. Arrow can be used with the pointers.",
  },
  {
    id: 696,
    Question:
      '14. What will be the output of the following program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> Test\n<span class="br0">{</span>\n\t<span class="kw2">public</span><span class="sy4">:</span> Test<span class="br0">(</span><span class="br0">)</span> \n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span>  <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> <span class="st0">"Test\'s Constructor is Called "</span> <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> endl<span class="sy4">;</span>  \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span>\n&nbsp;\n<span class="kw2">class</span> Result\n<span class="br0">{</span>\n\t<span class="kw4">static</span> Test a<span class="sy4">;</span>\n\t<span class="kw2">public</span><span class="sy4">:</span>\n\tResult<span class="br0">(</span><span class="br0">)</span> \n\t<span class="br0">{</span> \n\t\t<span class="kw3">cout</span>  <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> <span class="st0">"Result\'s Constructor is Called "</span> <span class="sy3">&amp;</span>lt<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span> endl<span class="sy4">;</span> \n\t<span class="br0">}</span>\n<span class="br0">}</span><span class="sy4">;</span> \n&nbsp;\n<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span> \n<span class="br0">{</span> \n\tResult b<span class="sy4">;</span> \n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Test’s Constructor is Called",
      "b) Result’s Constructor is Called",
      "c) Result’s Constructor Called Test’s Constructor is Called",
      "d) Test’s Constructor Called Result’s Constructor is Called",
    ],
    Answer:
      "Answer: b\nExplanation: The output is the message printed from the constructor of class Result. There is no inheritance used hence only one constructor is called. Since static members are declared once in class declaration and are not defined. The constructor of class Test will not be called.",
  },
  {
    id: 697,
    Question:
      "Which among the following is wrong syntax related to static data members?",
    Options: [
      "a) className :: staticDataMember;",
      "b) dataType className :: memberName =value;",
      "c) static dataType memberName;",
      "d) className : dataType -> memberName;",
    ],
    Answer:
      "Answer: d\nExplanation: The syntax given in option d doesn’t belong to any particular declaration or definition. First one is to access the static members using the class name. Second is to define the static data outside the class. Third syntax id to declare a data member as static in a class.",
  },
  {
    id: 698,
    Question:
      "Which among the following is correct definition for static member functions?",
    Options: [
      "a) Functions created to allocate constant values to each object",
      "b) Functions made to maintain single copy of member functions for all objects",
      "c) Functions created to define the static members",
      "d) Functions made to manipulate static programs",
    ],
    Answer:
      "Answer: b\nExplanation: The functions which are made common, with respect to definition and data usage, to all the objects. These functions are able to access the static data members of a class.",
  },
  {
    id: 699,
    Question: "The static member functions __________________",
    Options: [
      "a) Have access to all the members of a class",
      "b) Have access to only constant members of a class",
      "c) Have access to only the static members of a class",
      "d) Have direct access to all other class members also",
    ],
    Answer:
      "Answer: c\nExplanation: The static member functions are common for all the objects. These functions can use only the static members of a class in which those are defined. This is because other members change with respect to each object created.",
  },
  {
    id: 700,
    Question: "The static member functions ____________________",
    Options: [
      "a) Can be called using class name",
      "b) Can be called using program name",
      "c) Can be called directly",
      "d) Can’t be called outside the function",
    ],
    Answer:
      "Answer: a\nExplanation: The static members can be accessed using class name also. This is because the static members remain common to all the objects. Hence objects are not required.",
  },
  {
    id: 701,
    Question:
      "Which is correct syntax to access the static member functions with class name?",
    Options: [
      "a) className . functionName;",
      "b) className -> functionName;",
      "c) className : functionName;",
      "d) className :: functionName;",
    ],
    Answer:
      "Answer: d\nExplanation: The scope resolution operator must be used to access the static member functions with class name. This indicates that the function belongs to the corresponding class.",
  },
  {
    id: 702,
    Question:
      "Which among the following is not applicable for the static member functions?",
    Options: [
      "a) Variable pointers",
      "b) void pointers",
      "c) this pointer",
      "d) Function pointers",
    ],
    Answer:
      "Answer: c\nExplanation: Since the static members are not property of objects, they doesn’t have this pointer. Every time the same member is referred from all the objects, hence use of this pointer is of no use.",
  },
  {
    id: 703,
    Question: "Which among the following is true?",
    Options: [
      "a) Static member functions can’t be virtual",
      "b) Static member functions can be virtual",
      "c) Static member functions can be declared virtual if it is pure virtual class",
      "d) Static member functions can be used as virtual in Java",
    ],
    Answer:
      "Answer: a\nExplanation: The static member functions can’t be virtual. This is a restriction on static member functions, since the definition should not change or should not be overridden by any other function of derived class. The static members must remain same for all the objects.",
  },
  {
    id: 704,
    Question: "The static members are ______________________",
    Options: [
      "a) Created with each new object",
      "b) Created twice in a program",
      "c) Created as many times a class is used",
      "d) Created and initialized only once",
    ],
    Answer:
      "Answer: d\nExplanation: The static members are created only once. Then those members are reused whenever called or invoked. Memory is allocated only once.",
  },
  {
    id: 705,
    Question: "Which among the following is true?",
    Options: [
      "a) Static member functions can be overloaded",
      "b) Static member functions can’t be overloaded",
      "c) Static member functions can be overloaded using derived classes",
      "d) Static member functions are implicitly overloaded",
    ],
    Answer:
      "Answer: b\nExplanation: The static member functions can’t be overloaded because the definition must be the same for all the instances of a class. If an overloaded function have many definitions, none of them can be made static.",
  },
  {
    id: 706,
    Question: "The static member functions _______________",
    Options: [
      "a) Can’t be declared const",
      "b) Can’t be declared volatile",
      "c) Can’t be declared const or volatile",
      "d) Can’t be declared const, volatile or const volatile",
    ],
    Answer:
      "Answer: d\nExplanation: The static member functions can’t be made const, since any object or class itself should be capable of making changes to the function. And the function must retain all changes common to all the objects.",
  },
  {
    id: 707,
    Question:
      "Which keyword should be used to declare the static member functions?",
    Options: ["a) static", "b) stat", "c) const", "d) common"],
    Answer:
      "Answer: a\nExplanation: The member functions which are to be made static, must be preceded with the keyword static. This indicates the compiler to make the functions common to all the objects. And a new copy is not created with each of the new object.",
  },
  {
    id: 708,
    Question: "The keyword static is used _______________",
    Options: [
      "a) With declaration inside class and with definition outside the class",
      "b) With declaration inside class and not with definition outside the class",
      "c) With declaration and definition wherever done",
      "d) With each call to the member function",
    ],
    Answer:
      "Answer: b\nExplanation: The keyword is used only inside the class while declaring the static member. Outside the class, only definition with proper syntax is given. There is no need of specifying the keyword static again.",
  },
  {
    id: 709,
    Question:
      "Which among the following can’t be used to access the members in any way?",
    Options: [
      "a) Scope resolution",
      "b) Arrow operator",
      "c) Single colon",
      "d) Dot operator",
    ],
    Answer:
      "Answer: c\nExplanation: The single colon can’t be used in any way in order to access the static members of a class. Other symbols can be used according to the code and need.",
  },
  {
    id: 710,
    Question:
      "We can use the static member functions and static data member __________________",
    Options: [
      "a) Even if class object is not created",
      "b) Even if class is not defined",
      "c) Even if class doesn’t contain any static member",
      "d) Even if class doesn’t have complete definition",
    ],
    Answer:
      "Answer: a\nExplanation: The static members are property of class as a whole. There is no need of specific objects to call static members. Those can be called directly or with class name.",
  },
  {
    id: 711,
    Question: "The static data member _________________",
    Options: [
      "a) Can be mutable",
      "b) Can’t be mutable",
      "c) Can’t be integer",
      "d) Can’t be characters",
    ],
    Answer:
      "Answer: b\nExplanation: The static data members can never be mutable. There copies are not made. Since those are common and created only once.",
  },
  {
    id: 712,
    Question: "If static data member are made inline, ______________",
    Options: [
      "a) Those should be initialized outside the class",
      "b) Those can’t be initialized with the class",
      "c) Those can be initialized within the class",
      "d) Those can’t be used by class members",
    ],
    Answer:
      "Answer: c\nExplanation: Since the members are created once and are common for all the instances, those can be initialized inside the class. Those doesn’t change with each object being created hence can be defined inside the class once for all.",
  },
  {
    id: 713,
    Question: "Passing object to a function _______________",
    Options: [
      "a) Can be done only in one way",
      "b) Can be done in more than one ways",
      "c) Is not possible",
      "d) Is not possible in OOP",
    ],
    Answer:
      "Answer: b\nExplanation: The objects can be passed to the functions and this requires OOP concept because objects are main part of OOP. The objects can be passed in more than one way to a function. The passing depends on how the object have to be used.",
  },
  {
    id: 714,
    Question: "The object ________________",
    Options: [
      "a) Can be passed by reference",
      "b) Can be passed by value",
      "c) Can be passed by reference or value",
      "d) Can be passed with reference",
    ],
    Answer:
      "Answer: c\nExplanation: The objects can be passed by reference if required to use the same object. The values can be passed so that the main object remains same and no changes are made to it if the function makes any changes to the values being passed.",
  },
  {
    id: 715,
    Question:
      "Which symbol should be used to pass the object by reference in C++?",
    Options: ["a) &", "b) @", "c) $", "d) $ or &"],
    Answer:
      "Answer: a\nExplanation: The object to be passed by reference to the function should be preceded by & symbol in the argument list syntax of the function. This indicates the compiler not to use new object. The same object which is being passed have to be used.",
  },
  {
    id: 716,
    Question: "If object is passed by value ______________",
    Options: [
      "a) Copy constructor is used to copy the values into another object in the function",
      "b) Copy constructor is used to copy the values into temporary object",
      "c) Reference to the object is used to access the values of the object",
      "d) Reference to the object is used to created new object in its place",
    ],
    Answer:
      "Answer: a\nExplanation: The copy constructor is used. This constructor is used to copy the values into a new object which will contain all the values same as that of the object being passed but any changes made to the newly created object will not affect the original object.",
  },
  {
    id: 717,
    Question: "Pass by reference of an object to a function _______________",
    Options: [
      "a) Affects the object in called function only",
      "b) Affects the object in prototype only",
      "c) Affects the object in caller function",
      "d) Affects the object only if mentioned with & symbol with every call",
    ],
    Answer:
      "Answer: c\nExplanation: The original object in the caller function will get affected. The changes made in the called function will be same in the caller function object also.",
  },
  {
    id: 718,
    Question: "Copy constructor definition requires __________________",
    Options: [
      "a) Object to be passed by value",
      "b) Object not to be passed to it",
      "c) Object to be passed by reference",
      "d) Object to be passed with each data member value",
    ],
    Answer:
      "Answer: c\nExplanation: The object must be passed by reference to a copy constructor. This is to avoid the out of memory error. The constructors keeps calling itself, if not passed by reference, and goes out of memory.",
  },
  {
    id: 719,
    Question:
      "What is the type of object that should be specified in the argument list?",
    Options: [
      "a) Function name",
      "b) Object name itself",
      "c) Caller function name",
      "d) Class name of object",
    ],
    Answer:
      "Answer: d\nExplanation: The type of object is the class itself. The class name have to be specified in order to pass the objects to a function. This allows the program to create another object of same class or to use the same object that was passed.",
  },
  {
    id: 720,
    Question: "If an object is passed by value, _________________",
    Options: [
      "a) Temporary object is used in the function",
      "b) Local object in the function is used",
      "c) Only the data member values are used",
      "d) The values are accessible from the original object",
    ],
    Answer:
      "Answer: b\nExplanation: When an object is called by values, copy constructor is called and object is copied to the local object of the function which is mentioned in the argument list. The values gets copied and are used from the local object. There is no need to access the original object again.",
  },
  {
    id: 721,
    Question: "Can data members be passed to a function using the object?",
    Options: [
      "a) Yes, it can be passed only inside class functions",
      "b) Yes, only if the data members are public and are being passed to a function outside the class",
      "c) No, can’t be passed outside the class",
      "d) No, can’t be done",
    ],
    Answer:
      "Answer: b\nExplanation: The data members can be passed with help of object but only if the member is public. The object will obviously be used outside the class. The object must have access to the data member so that its value or reference is used outside the class which is possible only if the member is public.",
  },
  {
    id: 722,
    Question: "What exactly is passed when an object is passed by reference?",
    Options: [
      "a) The original object name",
      "b) The original object class name",
      "c) The exact address of the object in memory",
      "d) The exact address of data members",
    ],
    Answer:
      "Answer: c\nExplanation: The location of the object, that is, the exact memory location is passed, when the object is passed by reference. The pass by reference is actually a reference to the object that the function uses with another name to the same memory location as the original object uses.",
  },
  {
    id: 723,
    Question:
      "If the object is not to be passed to any function but the values of the object have to be used then?",
    Options: [
      "a) The data members should be passed separately",
      "b) The data members and member functions have to be passed separately",
      "c) The values should be present in other variables",
      "d) The object must be passed",
    ],
    Answer:
      "Answer: a\nExplanation: The data members can be passed separately. There is no need to pass whole object, instead we can use the object to pass only the required values.",
  },
  {
    id: 724,
    Question: "Which among the following is true?",
    Options: [
      "a) More than one object can’t be passed to a function",
      "b) Any number of objects can be passed to a function",
      "c) Objects can’t be passed, only data member values can be passed",
      "d) Objects should be passed only if those are public in class",
    ],
    Answer:
      "Answer: b\nExplanation: There is no restriction on passing the number of objects to a function. The operating system or the compiler or environment may limit the number of arguments. But there is no limit on number of objects till that limit.",
  },
  {
    id: 725,
    Question:
      '13. What will be the output if all necessary code is included (Header files and main function)?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw4">void</span> test <span class="br0">(</span>Object <span class="sy3">&amp;</span>y<span class="br0">)</span>\n<span class="br0">{</span>\n    y <span class="sy1">=</span> <span class="st0">"It is a string"</span><span class="sy4">;</span>\n<span class="br0">}</span>\n<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tObject x <span class="sy1">=</span> null<span class="sy4">;</span>\n\ttest <span class="br0">(</span>x<span class="br0">)</span><span class="sy4">;</span>\n\tSystem.<span class="me1">out</span>.<span class="me1">println</span> <span class="br0">(</span>x<span class="br0">)</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Run time error",
      "b) Compile time error",
      "c) Null",
      "d) It is a string",
    ],
    Answer:
      "Answer: d\nExplanation: This is because the x object is passed by reference. The changes made inside the function will be applicable to original function too.",
  },
  {
    id: 726,
    Question: "In which type is new memory location will be allocated?",
    Options: [
      "a) Only in pass by reference",
      "b) Only in pass by value",
      "c) Both in pass by reference and value",
      "d) Depends on the code",
    ],
    Answer:
      "Answer: b\nExplanation: The new memory location will be allocated only if the object is passed by value. Reference uses the same memory address and is denoted by another name also. But in pass by value, another object is created and new memory space is allocated for it.",
  },
  {
    id: 727,
    Question:
      "In which of the following way(s) can the object be returned from a function?",
    Options: [
      "a) Can only be returned by value",
      "b) Can only be returned by reference",
      "c) Can be returned either by value or reference",
      "d) Can neither be returned by value nor by reference",
    ],
    Answer:
      "Answer: c\nExplanation: The objects can be returned either by value or reference. There is no mandatory condition for the way it should be used. The way of returning object can be decided based on the requirement. ",
  },
  {
    id: 728,
    Question: "Whenever an object is returned by value ____________________",
    Options: [
      "a) A temporary object is created",
      "b) Temporary object is not created",
      "c) Temporary object may or may not be created",
      "d) New permanent object is created",
    ],
    Answer:
      "Answer: a\nExplanation: A temporary object is created when an object is returned by value. The temporary object is used to copy the values to another object or to be used in some way. The object holds all the values of the data members of the object. ",
  },
  {
    id: 729,
    Question:
      "Where the temporary objects (created while return by value) are created?",
    Options: [
      "a) Outside the function scope",
      "b) Within the function",
      "c) Inside the main function",
      "d) Inside the calling function",
    ],
    Answer:
      "Answer: b\nExplanation: The temporary object are created within the function and are intended to return the value for specific use. Either the object can be assigned to another object or be used directly if possible. ",
  },
  {
    id: 730,
    Question: "Which is the correct syntax for returning an object by value?",
    Options: [
      "a) void functionName ( ){ }",
      "b) object functionName( ) { }",
      "c) class object functionName( ) { }",
      "d) ClassName functionName ( ){ }",
    ],
    Answer:
      "Answer: d\nExplanation: The class name itself should be the return type of the function. This notifies that the function will return an object of specified class type. Only the class name should be specified. ",
  },
  {
    id: 731,
    Question:
      "Which is the correct syntax for defining a function which passes an object by reference?",
    Options: [
      "a) className& functionName ( )",
      "b) className* functionName( )",
      "c) className-> functionName( )",
      "d) &className functionName()",
    ],
    Answer:
      "Answer: a\nExplanation: The function declaration must contain the class name as return type. But, a & symbol should be followed by the class name. & indicates that the object being returned will be returned by reference. ",
  },
  {
    id: 732,
    Question:
      "If an object is declared inside the function then ____________________ outside the function.",
    Options: [
      "a) It can be returned by reference",
      "b) It can’t be returned by reference",
      "c) It can be returned by address",
      "d) It can’t be returned at all",
    ],
    Answer:
      "Answer: b\nExplanation: The object which is declared inside the class can never be returned by reference. This is because the object will be destroyed as it goes out of scope when the function is returned. The local variables get destroyed when function is returned hence the local objects can’t be returned by reference. ",
  },
  {
    id: 733,
    Question:
      "How many independent objects can be returned at same time from a function?",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: a\nExplanation: Only one object can be returned at a time. This is because a function is only capable of returning a single value at a time. Though array of objects can be returned from a function. ",
  },
  {
    id: 734,
    Question:
      "Which error will be produced if a local object is returned by reference outside a function?",
    Options: [
      "a) Out of memory error",
      "b) Run time error",
      "c) Compile time error",
      "d) No error",
    ],
    Answer:
      "Answer: c\nExplanation: If the local object is returned outside the function then the compile-time error arises. While the program is being converted and the processes happening during compile time, the compiler won’t be able to resolve the statement. ",
  },
  {
    id: 735,
    Question: "If object is passed by reference ____________________",
    Options: [
      "a) Temporary object is created",
      "b) Temporary object is created inside the function",
      "c) Temporary object is created for few seconds",
      "d) Temporary object is not created",
    ],
    Answer:
      "Answer: d\nExplanation: The temporary object is not created. If object is returned by reference, a particular memory location will be denoted with another name and hence same address values will be used. ",
  },
  {
    id: 736,
    Question: "Which among the following is correct?",
    Options: [
      "a) Individual data members can’t be returned",
      "b) Individual data members can be returned",
      "c) Individual member functions can be returned from another function",
      "d) Individual data members can only be passed by reference",
    ],
    Answer:
      "Answer: b\nExplanation: It is not mandatory to return the whole object. Instead we can return a specific data member value. But the return type given must match with the data type of the data being returned. ",
  },
  {
    id: 737,
    Question: "Can we return an array of objects?",
    Options: [
      "a) Yes, always",
      "b) Ye, only if objects are having same values",
      "c) No, because objects contain many other values",
      "d) No, because objects are single entity",
    ],
    Answer:
      "Answer: a\nExplanation: The Object array can be returned from a function. This can be done by putting a className* as the return type of the function. This makes the return type to accept an array of objects in return. ",
  },
  {
    id: 738,
    Question: "Which among the following is true?",
    Options: [
      "a) Two objects can point to the same memory location",
      "b) Two objects can never point to the same memory location",
      "c) Objects not allowed to point at a location already occupied",
      "d) Objects can’t point to any address",
    ],
    Answer:
      "Answer: b\nExplanation: It is not compulsory to return the object in the same way as it was passed. If the object is passed by reference then there is actually no need to return the object. Because the changes made inside the function will be visible on the original object of caller function also. ",
  },
  {
    id: 739,
    Question:
      "If an object is being returned by value then __________________________",
    Options: [
      "a) Its member values are made constant",
      "b) Its member values have to be copied individually",
      "c) Its member values are not used",
      "d) Its member values are copied using copy constructor",
    ],
    Answer:
      "Answer: a\nExplanation: When an object is created and instead of calling a constructor, another object is assigned to it. Both the objects point to the same memory location. This can be illustrated with help of return by reference. ",
  },
  {
    id: 740,
    Question: "Why temporary object is not created in return by reference?",
    Options: [
      "a) Because compiler can’t create temporary objects",
      "b) Because the temporary object is created within the function",
      "c) Because return by reference just make the objects points to values memory location",
      "d) Because return by reference just make the object point to null",
    ],
    Answer:
      "Answer: d\nExplanation: When an object is returned by value, it will be returned to another object or will be directly used. Still in all the conditions the copy constructor will be used to copy all the values from the temporary object that gets created. ",
  },
  {
    id: 741,
    Question:
      "When value of an object is assigned to another object ________________",
    Options: [
      "a) It becomes invalid statement",
      "b) Its values gets copied into another object",
      "c) Its values gets address of the existing values",
      "d) The compiler doesn’t execute that statement",
    ],
    Answer:
      "Answer: b\nExplanation: The values get copied to another object. No address is assigned to the object values. This is uses copy constructor to copy the values.",
  },
  {
    id: 742,
    Question:
      "If an object is created and another object is assigned to it, then ________________",
    Options: [
      "a) Copy constructor is called to copy the values",
      "b) Object is copied directly to the object",
      "c) Reference to another object is created",
      "d) The new object is initialized to null values",
    ],
    Answer:
      "Answer: c\nExplanation: The new object created, refers to the same address of the previously created object. Now whenever new object changes any data member value, it will affect the previously existing object. ",
  },
  {
    id: 743,
    Question: "How the argument passed to a function get initialized?",
    Options: [
      "a) Assigned using copy constructor at time of passing",
      "b) Copied directly",
      "c) Uses addresses always",
      "d) Doesn’t get initialized",
    ],
    Answer:
      "Answer: a\nExplanation: The arguments get initialized using the copy constructor. There is a need of assigning the value of all the members of an object to the local object of the function.",
  },
  {
    id: 744,
    Question:
      '4. Predict the output of the program.<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span> <span class="kw4">int</span> i<span class="sy4">;</span>\n<span class="br0">}</span><span class="sy4">;</span>\n<span class="kw4">void</span> main<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tA x<span class="sy4">;</span>\n\tA y<span class="sy1">=</span>x<span class="sy4">;</span>\n\tx.<span class="me1">i</span><span class="sy1">=</span><span class="nu0">10</span><span class="sy4">;</span>\n\ty.<span class="me1">i</span><span class="sy1">=</span><span class="nu0">20</span><span class="sy4">;</span>\n\ty.<span class="me1">i</span><span class="sy2">++</span><span class="sy4">;</span>\n\ty.<span class="me1">i</span><span class="sy1">=</span><span class="nu0">20</span><span class="sy4">;</span>\n\t<span class="kw3">cout</span><span class="sy3">&amp;</span>l<span class="sy4">;</span><span class="sy3">&amp;</span>lt<span class="sy4">;</span>tx.<span class="me1">i</span><span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: ["a) 10", "b) 20", "c) 21", "d) 0"],
    Answer:
      "Answer: b\nExplanation: The expected output may be 10 because the value of member of object x is printed. But when object x is assigned to y, y points to the same address where x is stored. So actually both objects x and y point to the same location and refers to the same object.",
  },
  {
    id: 745,
    Question:
      "If programmer doesn’t define any copy assignment operator then ____________________",
    Options: [
      "a) Compiler gives an error",
      "b) Program fails at run time",
      "c) Compiler gives an implicit definition",
      "d) Compiler can’t copy the member values",
    ],
    Answer:
      "Answer: c\nExplanation: While defining a copy constructor, we use reference const parameter, those are used for the assignment. The assignment operator may or may not be defined by the programmer, if not, compiler implicitly defines member wise copy assignment operator.",
  },
  {
    id: 746,
    Question:
      "In copy constructor definition, if non const values are accepted only ________",
    Options: [
      "a) Only const objects will be accepted",
      "b) Only non – const objects are accepted",
      "c) Only const members will not get copied",
      "d) Compiler generates an error",
    ],
    Answer:
      "Answer: a\nExplanation: Even if the programmer doesn’t define or even if they define the copy constructor. The compiler still generates a copy assignment operator. It doesn’t gets suppressed.",
  },
  {
    id: 747,
    Question: "How many objects can be assigned to a single address?",
    Options: [
      "a) Only 1",
      "b) At most 7",
      "c) At most 3",
      "d) As many as required",
    ],
    Answer:
      "Answer: b\nExplanation: Only the non – const objects will be accepted by the compiler. If a const object is passed, the compiler produces an error. To reduce that, we use const argument in definition, so that both const and non – const objects are accepted.",
  },
  {
    id: 748,
    Question: "Use of assignment operator ____________________",
    Options: [
      "a) Changes its use, when used at declaration and in normal assignment",
      "b) Doesn’t changes its use, whatever the syntax might be",
      "c) Assignment takes place in declaration and assignment syntax",
      "d) Doesn’t work in normal syntax, but only with declaration",
    ],
    Answer:
      "Answer: d\nExplanation: The memory address can be referenced by more than one object. There is no maximum number defined. Any number of objects can reference to the same address.",
  },
  {
    id: 749,
    Question:
      "If more than one object refer to the same address, any changes made __________",
    Options: [
      "a) Can be made visible to specific objects",
      "b) Will be specific to one object only",
      "c) From any object will be visible in all",
      "d) Doesn’t changes the values of all objects",
    ],
    Answer:
      "Answer: a\nExplanation: The assignment operator if used at declaration then it uses copy constructor for the copying of objects. If used in simple assignment syntax then it uses copy assignment function.",
  },
  {
    id: 750,
    Question: "How to make more than one object refer to the same object?",
    Options: [
      "a) Initialize it to null",
      "b) Initialize the object with another at declaration",
      "c) Use constructor to create new object",
      "d) Assign the address directly",
    ],
    Answer:
      "Answer: c\nExplanation: At a memory address, only one object can be referenced. All the other objects which refer to the same memory address make changes for all of the objects referring that address. ",
  },
  {
    id: 751,
    Question: "We can assign ______________________",
    Options: [
      "a) Value of one reference variable to another",
      "b) Value of any object to another",
      "c) Value of any type to any object",
      "d) Value of non – reference to another reference",
    ],
    Answer:
      "Answer: b\nExplanation: The object must get initialized with another object at time of declaration only. We don’t have to create a new object we just have to get name of new object because there after same address will be referred.",
  },
  {
    id: 752,
    Question: "Assigning reference to an object _________________",
    Options: [
      "a) Will create another copy of the object",
      "b) Will create two different copies of the object",
      "c) Will not create any other copy of the object",
      "d) Will not refer to the object",
    ],
    Answer:
      "Answer: a\nExplanation: Only the reference value can be assigned to another reference value. This is because both deal with the address. There is no type mismatch hence we can assign them.",
  },
  {
    id: 753,
    Question: "Which among the following is true?",
    Options: [
      "a) We can use direct assignment for any object",
      "b) We can use direct assignment only for different class objects",
      "c) We must not use direct assignment",
      "d) We can use direct assignment to same class objects",
    ],
    Answer:
      "Answer: c\nExplanation: When an object is assigned with another object. Same memory location is used. There is no other copy of the object created.",
  },
  {
    id: 754,
    Question: "Which language among the following doesn’t allow pointers?",
    Options: ["a) C++", "b) Java", "c) Pascal", "d) C"],
    Answer:
      "Answer: b\nExplanation: The concept of pointers is not supported in Java. The feature is not given in the language but can be used in some ways explicitly. Though this pointer is supported by java too.",
  },
  {
    id: 755,
    Question: "Which is correct syntax for declaring pointer to object?",
    Options: [
      "a) className* objectName;",
      "b) className objectName;",
      "c) *className objectName;",
      "d) className objectName();",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax must contain * symbol after the className as the type of object. This declares an object pointer. This can store address of any object of the specified class.",
  },
  {
    id: 756,
    Question:
      "Which operator should be used to access the members of the class using object pointer?",
    Options: [
      "a) Dot operator",
      "b) Colon to the member",
      "c) Scope resolution operator",
      "d) Arrow operator",
    ],
    Answer:
      "Answer: d\nExplanation: The members can be accessed from the object pointer by using arrow operator. The arrow operator can be used only with the pointer of class type. If simple object is declared, it must use dot operator to access the members.",
  },
  {
    id: 757,
    Question:
      "How does compiler decide the intended object to be used, if more than one object are used?",
    Options: [
      "a) Using object name",
      "b) Using an integer pointer",
      "c) Using this pointer",
      "d) Using void pointer",
    ],
    Answer:
      "Answer: c\nExplanation: This pointer denotes the object, in which it is being used. If member function is called with respect to one object then this pointer refers to the same object members. It can be used when members with same name are involved.",
  },
  {
    id: 758,
    Question: "If pointer to an object is declared __________",
    Options: [
      "a) It can store any type of address",
      "b) It can store only void addresses",
      "c) It can only store address of integer type",
      "d) It can only store object address of class type specified",
    ],
    Answer:
      "Answer: d\nExplanation: The address of only the specified class type can get their address stored in the object pointer. The addresses doesn’t differ but they do differ for the amount and type of memory required for objects of different classes. Hence same class object pointer should be used.",
  },
  {
    id: 759,
    Question: "What is the size of an object pointer?",
    Options: [
      "a) Equal to size of any usual pointer",
      "b) Equal to size of sum of all the members of object",
      "c) Equal to size of maximum sized member of object",
      "d) Equal to size of void",
    ],
    Answer:
      "Answer: a\nExplanation: The size of object pointer is same as that of any usual pointer. This is because only the address have to be stored. There are no values to be stored in the pointer.",
  },
  {
    id: 760,
    Question: "A pointer _________________",
    Options: [
      "a) Can point to only one object at a time",
      "b) Can point to more than one objects at a time",
      "c) Can point to only 2 objects at a time",
      "d) Can point to whole class objects at a time",
    ],
    Answer:
      "Answer: a\nExplanation: The object pointer can point to only one object at a time. The pointer will be able to store only one address at a time. Hence only one object can be referred.",
  },
  {
    id: 761,
    Question:
      "Pointer to a base class can be initialized with the address of derived class, because of _________",
    Options: [
      "a) derived-to-base implicit conversion for pointers",
      "b) base-to-derived implicit conversion for pointers",
      "c) base-to-base implicit conversion for pointers",
      "d) derived-to-derived implicit conversion for pointers",
    ],
    Answer:
      "Answer: a\nExplanation: It is an implicit rule defined in most of the programming languages. It permits the programmer to declare a pointer to the derived class from a base class pointer. In this way the programmer doesn’t have to declare object for derived class each time it is required.",
  },
  {
    id: 762,
    Question: "Can pointers to object access the private members of the class?",
    Options: [
      "a) Yes, always",
      "b) Yes, only if it is only pointer to object",
      "c) No, because objects can be referenced from another objects too",
      "d) No, never",
    ],
    Answer:
      "Answer: d\nExplanation: The pointers to an object can never access the private members of the class outside the class. The object can indirectly use those private members using member functions which are public in the class.",
  },
  {
    id: 763,
    Question: "Is name of an array of objects is also a pointer to object?",
    Options: [
      "a) Yes, always",
      "b) Yes, in few cases",
      "c) No, because it represents more than one object",
      "d) No, never",
    ],
    Answer:
      "Answer: a\nExplanation: The array name represents a pointer to the object. The name alone can represent the starting address of the array. But that also represents an array which is in turn stored in a pointer.",
  },
  {
    id: 764,
    Question: "Which among the following is true?",
    Options: [
      "a) The pointer to object can hold address only",
      "b) The pointer can hold value of any type",
      "c) The pointer can hold only void reference",
      "d) The pointer can’t hold any value",
    ],
    Answer:
      "Answer: a\nExplanation: The pointer to an object can hold only the addresses. Address of any other object of same class. This allows the programmer to link more than one objects if required.",
  },
  {
    id: 765,
    Question:
      "Which is the correct syntax to call a member function using pointer?",
    Options: [
      "a) pointer->function()",
      "b) pointer.function()",
      "c) pointer::function()",
      "d) pointer:function()",
    ],
    Answer:
      "Answer: a\nExplanation: The pointer should be mentioned followed by the arrow operator. Arrow operator is applicable only with the pointers. Then the function name should be mentioned that is to be called.",
  },
  {
    id: 766,
    Question:
      "If a pointer to an object is created and the object gets deleted without using the pointer then __________",
    Options: [
      "a) It becomes void pointer",
      "b) It becomes dangling pointer",
      "c) It becomes null pointer",
      "d) It becomes zero pointer",
    ],
    Answer:
      "Answer: b\nExplanation: When the address pointed by the object pointer gets deleted, the pointer now points to an invalid address. Hence it becomes a dangling pointer. It can’t be null or void pointer since it doesn’t point to any specific location.",
  },
  {
    id: 767,
    Question: "How can the address stored in the pointer be retrieved?",
    Options: [
      "a) Using * symbol",
      "b) Using $ symbol",
      "c) Using & symbol",
      "d) Using @ symbol",
    ],
    Answer:
      "Answer: c\nExplanation: The & symbol must be used. This should be done such that the object should be preceded by & symbol and then the address should be stored in another variable. This is done to get the address where the object is stored.",
  },
  {
    id: 768,
    Question:
      "What should be done to prevent changes that may be made to the values pointed by the pointer?",
    Options: [
      "a) Usual pointer can’t change the values pointed",
      "b) Pointer should be made virtual",
      "c) Pointer should be made anonymous",
      "d) Pointer should be made const",
    ],
    Answer:
      "Answer: d\nExplanation: The pointer should be declared as a const type. This prevents the pointer to change any value that is being pointed from it. This is a feature that is made to access the values using pointer but to make sure that pointer doesn’t change those values accidently.",
  },
  {
    id: 769,
    Question:
      "Which is the pointer which denotes the object calling the member function?",
    Options: [
      "a) Variable pointer",
      "b) This pointer",
      "c) Null pointer",
      "d) Zero pointer",
    ],
    Answer:
      "Answer: b\nExplanation: The pointer which denotes the object calling the member function is known as this pointer. The this pointer is usually used when there are members in the function with same name as those of the class members.",
  },
  {
    id: 770,
    Question: "Which among the following is true?",
    Options: [
      "a) this pointer is passed implicitly when member functions are called",
      "b) this pointer is passed explicitly when member functions are called",
      "c) this pointer is passed with help of pointer member functions are called",
      "d) this pointer is passed with help of void pointer member functions are called",
    ],
    Answer:
      "Answer: a\nExplanation: When an object calls some member function, it implicitly passes itself as an argument. This allows the compiler to know which member should be used for the purposes. This also allows to reduce the ambiguity among the variable and data member names.",
  },
  {
    id: 771,
    Question: "The this pointer is accessible __________________",
    Options: [
      "a) Within all the member functions of the class",
      "b) Only within functions returning void",
      "c) Only within non-static functions",
      "d) Within the member functions with zero arguments",
    ],
    Answer:
      "Answer: c\nExplanation: The this pointer is available only within the non-static member functions of a class. If the member function is static, it will be common to all the objects and hence a single object can’t refer to those functions independently.",
  },
  {
    id: 772,
    Question: "An object’s this pointer _____________________",
    Options: [
      "a) Isn’t part of class",
      "b) Isn’t part of program",
      "c) Isn’t part of compiler",
      "d) Isn’t part of object itself",
    ],
    Answer:
      "Answer: d\nExplanation: The object’s this pointer being called are not part of the object itself. This can be cross verified by checking that it doesn’t take up any space for the data to be stored or pointed.",
  },
  {
    id: 773,
    Question: "The result of sizeof() function __________________",
    Options: [
      "a) Includes space reserved for this pointer",
      "b) Includes space taken up by the address pointer by this pointer",
      "c) Doesn’t include the space taken by this pointer",
      "d) Doesn’t include space for any data member",
    ],
    Answer:
      "Answer: c\nExplanation: The space taken by this pointer is not reflected in by the sizeof() operator. This is because object’s this pointer is not part of object itself. This is a cross verification for the concept stating that this pointer doesn’t take any space in the object.",
  },
  {
    id: 774,
    Question: "Whenever non-static member functions are called _______________",
    Options: [
      "a) Address of the object is passed implicitly as an argument",
      "b) Address of the object is passed explicitly as an argument",
      "c) Address is specified globally so that the address is not used again",
      "d) Address is specified as return type of the function",
    ],
    Answer:
      "Answer: a\nExplanation: The address is passed implicitly as an argument to the function. This doesn’t have to be passed explicitly. The address is passed, of the object which is calling the non-static member function.",
  },
  {
    id: 775,
    Question:
      "Which is the correct interpretation of the member function call from an object, object.function(parameter);",
    Options: [
      "a) object.function(&this, parameter)",
      "b) object(&function,parameter)",
      "c) function(&object,&parameter)",
      "d) function(&object,parameter)",
    ],
    Answer:
      "Answer: d\nExplanation: The function name is specified first and then the parameter lists. The parameter list is included with the object name along with & symbol. This denotes that the address of the object is being passed as an argument.",
  },
  {
    id: 776,
    Question: "The address of the object _________________",
    Options: [
      "a) Can’t be accessed from inside the function",
      "b) Can’t be accessed in the program",
      "c) Is available inside the member function using this pointer",
      "d) Can be accessed using the object name inside the member function",
    ],
    Answer:
      "Answer: c\nExplanation: The address of the object with respect to which the member functions are being called, are stored in this pointer. This pointer is hence used whenever there are members with same name as those of the variables inside the function.",
  },
  {
    id: 777,
    Question: "Which among the following is true?",
    Options: [
      "a) This pointer can be used to guard against any kind of reference",
      "b) This pointer can be used to guard against self-reference",
      "c) This pointer can be used to guard from other pointers",
      "d) This pointer can be used to guard from parameter referencing",
    ],
    Answer:
      "Answer: b\nExplanation: The this pointer can be used to guard itself whenever self-reference is used. This allows accidental address access. And accidental modification of data.",
  },
  {
    id: 778,
    Question: "Which syntax doesn’t execute/is false when executed?",
    Options: [
      "a) if(&object != this)",
      "b) if(&function !=object)",
      "c) this.if(!this)",
      "d) this.function(!this)",
    ],
    Answer:
      "Answer: a\nExplanation: The condition becomes false when executed and hence doesn’t executes. This is the case where this pointer can guard itself from the self-reference. Here if the address of the object doesn’t match with this pointer that means the object doesn’t refer itself.",
  },
  {
    id: 779,
    Question: "The this pointers _____________________",
    Options: [
      "a) Are modifiable",
      "b) Can be assigned any value",
      "c) Are made variables",
      "d) Are non-modifiable",
    ],
    Answer:
      "Answer: d\nExplanation: The this pointer is non modifiable. This is because the address of any object remains constant throughout its life time. Hence the address must not be changed otherwise wrong members of invalid addresses might get accessed.",
  },
  {
    id: 780,
    Question: "Earlier implementations of C++ ___________________",
    Options: [
      "a) Never allowed assignment to this pointer",
      "b) Allowed no assignment to this pointer",
      "c) Allowed assignments to this pointer",
      "d) Never allowed assignment to any pointer",
    ],
    Answer:
      "Answer: c\nExplanation: The earlier, most initial versions of C++ used to allow assignments to this pointers. That used to allow modifications of this pointer. Later that feature got disabled.",
  },
  {
    id: 781,
    Question: "This pointer can be used directly to ___________",
    Options: [
      "a) To manipulate self-referential data structures",
      "b) To manipulate any reference to pointers to member functions",
      "c) To manipulate class references",
      "d) To manipulate and disable any use of pointers",
    ],
    Answer:
      "Answer: a\nExplanation: This is a feature provided, that can be used directly. The manipulation of self-referential data structures is just an application of this feature. Other conditions fails as this pointer doesn’t deal with those things.",
  },
  {
    id: 782,
    Question: "Which among the following is/are type(s) of this pointer?",
    Options: ["a) const", "b) volatile", "c) const or volatile", "d) int"],
    Answer:
      "Answer: c\nExplanation: The this pointer can be declared const or volatile. This depends on need of program and type of code. This is just an additional feature.",
  },
  {
    id: 783,
    Question:
      "Which is the correct syntax for declaring the type of this in a member function?",
    Options: [
      "a) classType [cv-qualifier-list] *const this;",
      "b) classType const[cv-qualifier-list] *this;",
      "c) [cv-qualifier-list]*const classType this;",
      "d) [cv-qualifier-list] classType *const this;",
    ],
    Answer:
      "Answer: d\nExplanation: The syntax contains the cv-qualifier-list that can be determined from the member function declaratory that can be either const or volatile or can be made both. Hence we write it as list. classType denotes the name of class to mention to which class does the object belong to. And *const this denotes that the this pointer is having a constant value.",
  },
  {
    id: 784,
    Question: "What are default arguments?",
    Options: [
      "a) Arguments which are not mandatory to be passed",
      "b) Arguments with default value that aren’t mandatory to be passed",
      "c) Arguments which are not passed to functions",
      "d) Arguments which always take same data value",
    ],
    Answer:
      "Answer: b\nExplanation: The arguments which are assigned with some default value. Since some value is already given, it is not mandatory to pass those arguments. They can be used directly.",
  },
  {
    id: 785,
    Question: "Which is the correct condition for the default arguments?",
    Options: [
      "a) Those must be declared as last arguments in argument list",
      "b) Those must be declared first in the argument list",
      "c) Those can be defined anywhere in the argument list",
      "d) Those are declared inside the function definition",
    ],
    Answer:
      "Answer: a\nExplanation: The default arguments must be declared at last in the argument list. This is to ensure that the arguments doesn’t create ambiguity. The normal arguments should be passed first.",
  },
  {
    id: 786,
    Question:
      "If a member function have to be made both zero argument and parameterized constructor, which among the following can be the best option?",
    Options: [
      "a) Two normal and one default argument",
      "b) At least one default argument",
      "c) Exactly one default argument",
      "d) Make all the arguments default",
    ],
    Answer:
      "Answer: d\nExplanation: All the arguments must be made default. This will make sure that none of the arguments are mandatory to be passed. Which in turn means that the function can work without any argument and can be passed with arguments too.",
  },
  {
    id: 787,
    Question:
      "Which among the following function can be called without arguments?",
    Options: [
      "a) void add(int x, int y=0)",
      "b) void add(int=0)",
      "c) void add(int x=0, int y=0)",
      "d) void add(char c)",
    ],
    Answer:
      "Answer: c\nExplanation: For the function to be called without arguments, either it must have zero arguments or it must have all the default arguments. Here the function in option void add(int x=0, int y=0) have all the default arguments and hence can be called directly with zero argument.",
  },
  {
    id: 788,
    Question:
      "If a function have all the default arguments but still some values are passed to the function then ______________",
    Options: [
      "a) The function will use the values passed to it",
      "b) The function will use the default values as those are local",
      "c) The function can use any value whichever is higher",
      "d) The function will choose the minimum values",
    ],
    Answer:
      "Answer: a\nExplanation: The function will use the values passed explicitly to it. The default values will be ignored. The default values are used only in case the values are not passed explicitly to the function.",
  },
  {
    id: 789,
    Question: "Which among the following is correct?",
    Options: [
      "a) void test(int x=0, int y, int z=0)",
      "b) void test(int x=0, int=0)",
      "c) void test(int x, int y=0)",
      "d) void test(int x=’c, int y)",
    ],
    Answer:
      "Answer: c\nExplanation: The default arguments must be mentioned at last in the argument list. Also, the type of values assigned must match with the argument type. All the default arguments must be mentioned at last, none of the normal arguments should come in between the default arguments list.",
  },
  {
    id: 790,
    Question:
      "What function will be called with the independent syntax “test(5,6,7);”?",
    Options: [
      "a) void test(int x, int y)",
      "b) void test(int x=0, int y, int z)",
      "c) int test(int x=0, y=0, z=0)",
      "d) void test(int x, int y, int z=0)",
    ],
    Answer:
      "Answer: d\nExplanation: There are three arguments that are getting passed to the function test(). Only the last option have all the default argument at last in the argument list. And the total number of the arguments is three. The third option is wrong because the return type is int and the syntax given is independent which means it doesn’t return any value.",
  },
  {
    id: 791,
    Question:
      "Which among the following is a wrong call to the function void test(int x, int y=0, int z=0)?",
    Options: ["a) test(5,6,7);", "b) test(5);", "c) test();", "d) test(5,6);"],
    Answer:
      "Answer: c\nExplanation: The function must be passed with at least one argument. There is two default arguments and one normal argument which must be passed with some value. Hence the third call to the function is wrong as it doesn’t pass even a single parameter to the function",
  },
  {
    id: 792,
    Question: "Default arguments are _________________________",
    Options: [
      "a) Only allowed in the parameter list of the function declaration",
      "b) Only allowed in the return type of the function declaration",
      "c) Only allowed with the class name definition",
      "d) Only allowed with the integer type values",
    ],
    Answer:
      "Answer: a\nExplanation: The default arguments are only allowed in the parameter list of the function arguments. This rule was not applicable in the beginning versions of c++ but later from c++ 14th version it has been implemented. This is the only way to use default arguments.",
  },
  {
    id: 793,
    Question: "Which among the following is false for default arguments?",
    Options: [
      "a) Those are not allowed with a declaration of pointer to functions",
      "b) Those are not allowed with the reference to functions",
      "c) Those are not allowed with the typedef declarations",
      "d) Those are allowed with pointer and reference to function declaration",
    ],
    Answer:
      "Answer: d\nExplanation: The statements given are true because that is a feature given to make the programming more flexible and have some security with accidental changes at same time. The last option is false because it is not a rule defined. It is an opposite statement to the rules defined for default arguments.",
  },
  {
    id: 794,
    Question:
      "The non-template functions can be added with default arguments to already declared functions ____________________",
    Options: [
      "a) If and only if the function is declared again in the same scope",
      "b) If and only if the function is declared only once in the same scope",
      "c) If and only if the function is declared in different scope",
      "d) If and only if the function is declared twice in the program",
    ],
    Answer:
      "Answer: a\nExplanation: The non-template functions can also be added with default arguments. This can be done even if the functions were defined earlier. This is because the call to the function won’t be affected. The function can still be used in the same way as it was used earlier.",
  },
  {
    id: 795,
    Question: "The using declaration __________",
    Options: [
      "a) Doesn’t carry over the default values",
      "b) Carries over the known default arguments",
      "c) Carries over only the normal arguments",
      "d) Carries over only few default arguments",
    ],
    Answer:
      "Answer: b\nExplanation: The using-declaration carries over all the known default arguments. This is a common feature as the usage doesn’t gets affected even if the default arguments are added. This comes under flexible programming.",
  },
  {
    id: 796,
    Question:
      "The names given to the default arguments are only looked up and ________________ and are bound during declaration.",
    Options: [
      "a) Checked for availability",
      "b) Checked for random access",
      "c) Checked for accessibility",
      "d) Checked for feasibility",
    ],
    Answer:
      "Answer: c\nExplanation: The names given to the default arguments are bound at time of declaration but are only checked for accessibility and to get bounded. This is mainly to bind those members during declaration.",
  },
  {
    id: 797,
    Question:
      "The default argument get bound during declaration ________________",
    Options: [
      "a) And are never executed",
      "b) And are executed simultaneously",
      "c) But are executed only if priority is given",
      "d) But are executed during function call",
    ],
    Answer:
      "Answer: d\nExplanation: The default argument are bound at the time of declaration. That is an implicit functioning. But those are executed only when the function is called. Otherwise, those will never get executed.",
  },
  {
    id: 798,
    Question: "The virtual function overrides ____________",
    Options: [
      "a) Do not acquire base class declaration of default arguments",
      "b) Do acquire base class declaration of default arguments",
      "c) Do not link with the default arguments of base class",
      "d) Do link with the default argument but only of derived classes",
    ],
    Answer:
      "Answer: a\nExplanation: The virtual function overrides do not acquire the base class declaration of default arguments. Even if a call to the virtual function is made, static type of the object decides the default arguments to be used.",
  },
  {
    id: 799,
    Question: "Which among the following is true for constructors overloading?",
    Options: [
      "a) Constructors can’t be overloaded",
      "b) Constructors can be overloaded using different signatures",
      "c) Constructors can be overloaded with same signatures",
      "d) Constructors can be overloaded with different return types",
    ],
    Answer:
      "Answer: b\nExplanation: The constructors can be overloaded only if the definitions have different signatures. Constructors doesn’t have any return type so can’t be overloaded using return type. If constructors have same signature then it will produce a compile time error.",
  },
  {
    id: 800,
    Question:
      "If a constructors should be capable of creating objects without argument and with arguments, which is a good alternative for this purpose?",
    Options: [
      "a) Use zero argument constructor",
      "b) Use constructor with one parameter",
      "c) Use constructor with all default arguments",
      "d) Use default constructor",
    ],
    Answer:
      "Answer: c\nExplanation: The constructor should use all the default arguments. This will allow the constructor to be called even if no arguments are passed. And if arguments are passed, those will be accepted instead of the default values.",
  },
  {
    id: 801,
    Question: "Which among the following is true?",
    Options: [
      "a) The constructors overloading can be done by using different names",
      "b) The constructors overloading can be done by using different return types",
      "c) The constructors can be overloaded by using only one argument",
      "d) The constructors must have the same name as that of class",
    ],
    Answer:
      "Answer: a\nExplanation: The constructors with all the default arguments are similar as the default constructors. Those can be used instead of the default constructors. So defining the default constructor is not mandatory.",
  },
  {
    id: 802,
    Question:
      "Which among the following can be used in place of default constructor?",
    Options: [
      "a) constructorName(int x, int y=0)",
      "b) constructorName(int x=0, int y=0)",
      "c) constructorName(int x=0, int y)",
      "d) constructorName(int x, int y)",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors must have the same name as that of the class name. This is mandatory because only the constructor functions doesn’t have any return type. Also, for overloading all the functions must have the same name.",
  },
  {
    id: 803,
    Question:
      "Can a class have more than one function with all the default arguments?",
    Options: [
      "a) Yes, always",
      "b) Yes, if argument list is different",
      "c) No, because constructors overloading doesn’t depend on argument list",
      "d) No, never",
    ],
    Answer:
      "Answer: b\nExplanation: For a parameterized constructor to be used as a default constructor, it must have all the default arguments. This makes the constructor to have optional arguments which are not mandatory to be passed.",
  },
  {
    id: 804,
    Question:
      "Which is the correct syntax for using default arguments with the constructor?",
    Options: [
      "a) default constructorName(default int x=0)",
      "b) constructorName(default int x=0)",
      "c) constructorName(int x=0)",
      "d) constructorName()",
    ],
    Answer:
      "Answer: d\nExplanation: A single class can never have more than once constructor with all the default arguments. This is because it will make all those constructors as a default constructor. And when an object is created with zero arguments then it will create ambiguity.",
  },
  {
    id: 805,
    Question:
      "If the constructors are overloaded by using the default arguments, which problem may arise?",
    Options: [
      "a) The constructors might have all the same arguments except the default arguments",
      "b) The constructors might have same return type",
      "c) The constructors might have same number of arguments",
      "d) The constructors can’t be overloaded with respect to default arguments",
    ],
    Answer:
      "Answer: c\nExplanation: The constructors using the default arguments must initialize the arguments in the argument list. This is to make the constructor use the default value when no arguments are passed. If no arguments are listed then it is a default constructor.",
  },
  {
    id: 806,
    Question: "Which among the following is true?",
    Options: [
      "a) More than one constructors with all default arguments is allowed",
      "b) More than one constructors with all default arguments can be defined outside the class",
      "c) More than one constructors can be used with same argument list",
      "d) More than one constructors with all default arguments can’t exist in same class",
    ],
    Answer:
      "Answer: b\nExplanation: In the prototype given, only 2 arguments are mandatory. Since the third argument is default argument, so it is not mandatory to pass the argument.",
  },
  {
    id: 807,
    Question:
      "Which constructor among the following will be called if a call is made like className(5,’a’);?",
    Options: [
      "a) className(int x=5,char c=’a’);",
      "b) int className(int x, char c, char d);",
      "c) className(int x, char c, int y);",
      "d) char className(char c,int x);",
    ],
    Answer:
      "Answer: a\nExplanation: The constructors having same arguments except the default arguments can give rise to errors. If only the mandatory arguments are passed, it will create ambiguity in calling the correct constructor. Hence the mandatory arguments must be different.",
  },
  {
    id: 808,
    Question: "Which constructor definition will produce a compile time error?",
    Options: [
      "a) className(int x=0);",
      "b) className(char c);",
      "c) className(int x=0,char c);",
      "d) className(char c,int x=0);",
    ],
    Answer:
      "Answer: d\nExplanation: The constructors must have different argument list. Along that, if all the arguments are default arguments, there can’t be more than once constructor like that in the same class as that will create ambiguity while constructors are being called.",
  },
  {
    id: 809,
    Question:
      "If there is a constructor with all the default arguments and arguments are not passed then _________________",
    Options: [
      "a) The default values given will not be used",
      "b) Then all the null values will be used",
      "c) Then all the default values given will be used",
      "d) Then compiler will produce an error",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax given is passing two parameters to the constructor call. One value is of integer type and another of character type. Hence the constructor with arguments of int and char type should be called. There is only one option that first accepts integer value and then a character value. Hence that constructor will be called.",
  },
  {
    id: 810,
    Question: "Which is the correct statement for default constructors?",
    Options: [
      "a) The constructors with all the default arguments",
      "b) The constructors with all the null and zero values",
      "c) The constructors which can’t be defined by programmer",
      "d) The constructors with zero arguments",
    ],
    Answer:
      "Answer: c\nExplanation: The default arguments, just like with member functions, must be listed at last in the argument list. Hence this will produce a compile time error. The compiler doesn’t allow the definition to be executed.",
  },
  {
    id: 811,
    Question:
      "Which is a good alternative instead of having one zero argument constructor and one single argument constructor with default argument?",
    Options: [
      "a) No constructor defined",
      "b) One default value constructor",
      "c) Defining the default constructor",
      "d) Using one constructor with two arguments",
    ],
    Answer:
      "Answer: c\nExplanation: The constructors will use the default values listed for use. The null values are not used because those are not specified. Though if it was compiler provided default constructor, then it would have initialized the members to null or zero values.",
  },
  {
    id: 812,
    Question: "What is upcasting?",
    Options: [
      "a) Casting subtype to supertype",
      "b) Casting super type to subtype",
      "c) Casting subtype to super type and vice versa",
      "d) Casting anytype to any other type",
    ],
    Answer:
      "Answer: a\nExplanation: The upcasting concept includes only the casting of subtypes to the super types. This casting is generally done implicitly. Smaller size types can fit into larger size types implicitly.",
  },
  {
    id: 813,
    Question: "Which among the following is true for upcasting in inheritance?",
    Options: [
      "a) Downward to the inheritance tree",
      "b) Upward to the inheritance tree",
      "c) Either upward or downward",
      "d) Doesn’t apply on inheritance",
    ],
    Answer:
      "Answer: b\nExplanation: The upcasting concept in inheritance is always applied upward the inheritance tree. The derived class objects can be type casted to any of its parent class type. Since is a relationship applies in general inheritance.",
  },
  {
    id: 814,
    Question: "Which among the following is safe?",
    Options: [
      "a) Upcasting",
      "b) Downcasting",
      "c) Both upcasting and downcasting",
      "d) If upcasting is safe then downcasting is not, and vice versa",
    ],
    Answer:
      "Answer: a\nExplanation: The upcasting is always safe since the derived type or the smaller type is converted into the base type or the larger size. This results in allocating a smaller size data into bigger type data. No data is lost in casting, hence safe.",
  },
  {
    id: 815,
    Question:
      "Which among the following is the best situation to use upcasting?",
    Options: [
      "a) For general code dealing with only subtype",
      "b) For general code dealing with only supertype",
      "c) For general code dealing with both the supertype and subtype",
      "d) For writing a rigid code with respect to subtype",
    ],
    Answer:
      "Answer: b\nExplanation: When a general code has to be written where we use only the supertype object or the data of bigger size, then upcasting would be the best option. Since the whole code will require only the supertype name references.",
  },
  {
    id: 816,
    Question: "Which property is shown most when upcasting is used?",
    Options: [
      "a) Code reusability",
      "b) Code efficiency",
      "c) Complex code simple syntax",
      "d) Encapsulation",
    ],
    Answer:
      "Answer: c\nExplanation: The code written using upcasting mostly shows complex code in simpler syntax features. This is because the upcasting concept can be applied as polymorphism and to group the similar type of objects.",
  },
  {
    id: 817,
    Question:
      '7. Which casting among the following is allowed for the code given below?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw2">class</span> A\n<span class="br0">{</span>\n\t<span class="kw2">public</span> <span class="sy4">:</span><span class="kw4">int</span> a<span class="sy4">;</span>\n<span class="br0">}</span>\n<span class="kw2">class</span> B<span class="sy4">:</span><span class="kw2">public</span> A\n<span class="br0">{</span>\n\t<span class="kw4">int</span> b<span class="sy4">;</span>\n<span class="br0">}</span>\nmain<span class="br0">(</span><span class="br0">)</span>\n<span class="br0">{</span>\n\tB b<span class="sy1">=</span><span class="kw3">new</span> A<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>  <span class="co1">//casting 1</span>\n\tA a<span class="sy1">=</span><span class="kw3">new</span> B<span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>  <span class="co1">//casting 2</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: [
      "a) Casting 1",
      "b) Casting 2",
      "c) casting 1 and casting 2",
      "d) casting 1 nor casting 2",
    ],
    Answer:
      "Answer: b\nExplanation: It is a bit confusing concept since both casting concepts are different. Primitive casting depends on the type and size of data being typecast. Whereas in objects casting, the classes and inheritance order plays a big role.",
  },
  {
    id: 818,
    Question:
      "If multiple inheritance is implemented, which upcasting will be correct?",
    Options: [
      "a) Upcast to first base class listed in inheritance",
      "b) Upcast to send base class listed in inheritance",
      "c) Upcast to any base class",
      "d) Upcast is not possible",
    ],
    Answer:
      "Answer: b\nExplanation: The casting 2 is correct. The objects casting must be done from derived class object to a parent class object. That is, the object of the superclass can be made an object of subclass only. Vice versa is not possible.",
  },
  {
    id: 819,
    Question:
      "If class C inherits class B and class B inherits class A ________________",
    Options: [
      "a) Class C object can be upcasted to object of class B only",
      "b) Class C object can be upcasted to object of class A only",
      "c) Class C object can be upcasted to object of either class A or B",
      "d) Class C object can’t be upcasted",
    ],
    Answer:
      "Answer: c\nExplanation: The upcasting of derived class object is possible to any base class. This is because the base class object can represent any of its derived classes using upcasting.",
  },
  {
    id: 820,
    Question:
      "Upcasting is _____________________ without an explicit type cast.",
    Options: [
      "a) Always allowed for public inheritance",
      "b) Always allowed for protected inheritance",
      "c) Always allowed for private inheritance",
      "d) Not allowed",
    ],
    Answer:
      "Answer: c\nExplanation: Both class A and B are parent classes of class C. Class C object hence can be upcasted to any of those class objects. It is not compulsory to upcast to nearest parent.",
  },
  {
    id: 821,
    Question: "Which concept is needed because of implicit type casting use?",
    Options: [
      "a) Static binding",
      "b) Dynamic binding",
      "c) Compile time binding",
      "d) Source code binding",
    ],
    Answer:
      "Answer: a\nExplanation: The public inheritance shows the most flexible is-a relationship. Hence explicit type casting is not required. Implicit type casting is done by the compiler.",
  },
  {
    id: 822,
    Question: "When are the pointer types known for upcasting the objects?",
    Options: [
      "a) Compile time",
      "b) Runtime",
      "c) Source code build time",
      "d) Doesn’t apply to pointer types",
    ],
    Answer:
      "Answer: b\nExplanation: Since the implicit type casting allows casting of a base class pointer to refer to its derived class object or even base class object. We need dynamic type casting so that the references can be resolved during execution of program.",
  },
  {
    id: 823,
    Question: "When are the object type known for upcasting the objects?",
    Options: [
      "a) Compile time",
      "b) Runtime",
      "c) Source code build time",
      "d) Doesn’t apply to objects directly",
    ],
    Answer:
      "Answer: a\nExplanation: The pointer or reference types are known at compile time for the upcasting of an object. This is because the addresses must be known for casting the derived class to base class object.",
  },
  {
    id: 824,
    Question:
      "If two classes are defined “Parent” and “Child” then which is the correct type upcast syntax in C++?",
    Options: [
      "a) Parent *p=child;",
      "b) Parent *p=*child;",
      "c) Parent *p=&child;",
      "d) Parent *p=Child();",
    ],
    Answer:
      "Answer: b\nExplanation: The upcasting with objects directly requires runtime resolving. The objects are fixed and address are allocated at compile time. But the execution of a program requires runtime knowledge of object types, for implicit type cast.",
  },
  {
    id: 825,
    Question: "Which among the following is true?",
    Options: [
      "a) Upcasting is possible only for single level inheritance",
      "b) Upcasting is possible only for multilevel inheritance",
      "c) Upcasting is possible only for multiple inheritance",
      "d) Upcasting is possible for any type of inheritance",
    ],
    Answer:
      "Answer: c\nExplanation: The syntax must contain the base class name first. So that the parent class object pointer can be declared. Then the object is assigned with the derived class object with & symbol. & symbol is added to get the address of the derived class object.",
  },
  {
    id: 826,
    Question: "What is downcasting?",
    Options: [
      "a) Casting subtype to supertype",
      "b) Casting supertype to subtype",
      "c) Casting subtype to supertype and vice versa",
      "d) Casting anytype to any other type",
    ],
    Answer:
      "Answer: b\nExplanation: The downcasting concept includes only the casting of supertypes to the sub types. This casting is generally done explicitly. Larger size types are made to fit into small size types explicitly.",
  },
  {
    id: 827,
    Question:
      "Which among the following is a mandatory condition for downcasting?",
    Options: [
      "a) It must not be done explicitly",
      "b) It must be done implicitly",
      "c) It must be done explicitly",
      "d) It can’t be done explicitly",
    ],
    Answer:
      "Answer: c\nExplanation: The downcasting of any object must be done explicitly. This is because the compilers don’t support the implicit conversion of a supertype to subtype.",
  },
  {
    id: 828,
    Question: "Downcasting is _______________________",
    Options: [
      "a) Always safe",
      "b) Never safe",
      "c) Safe sometimes",
      "d) Safe, depending on code",
    ],
    Answer:
      "Answer: b\nExplanation: The downcasting concept is made for exception cases. When there is a need to represent an entity in the form which is not suitable for it. Representing a base type in derived type is not right but can be done for special cases.",
  },
  {
    id: 829,
    Question: "Downcasting ____________________",
    Options: [
      "a) Can result in unexpected results",
      "b) Can’t result in unexpected result",
      "c) Can result only in out of memory error",
      "d) Can’t result in any error",
    ],
    Answer:
      "Answer: a\nExplanation: The result of downcasting can be unexpected. This is because downcasting is done on the objects into the objects which doesn’t contain any information of data in lateral object.",
  },
  {
    id: 830,
    Question: "What should be used for safe downcast?",
    Options: [
      "a) Static cast",
      "b) Dynamic cast",
      "c) Manual cast",
      "d) Implicit cast",
    ],
    Answer:
      "Answer: b\nExplanation: The dynamic cast can be done using the operator dynamic_cast. This converts one type to another type in a safe way.",
  },
  {
    id: 831,
    Question: "What does dynamic_cast return after successful type casting?",
    Options: [
      "a) Address of object which is converted",
      "b) Address of object that is used for conversion",
      "c) Address of object that is mentioned in the syntax",
      "d) Doesn’t return any address",
    ],
    Answer:
      "Answer: a\nExplanation: The address of the object which is converted is returned by the dynamic_cast operator. This is done to safely convert the subtype to supertype. This ensures the proper assignment and conversion from one type to another.",
  },
  {
    id: 832,
    Question: "If dynamic_cast fails, which value is returned?",
    Options: ["a) void", "b) null", "c) void pointer", "d) null pointer"],
    Answer:
      "Answer: d\nExplanation: The null pointer is returned by the dynamic_cast, if it fails. The conversion sometimes fails because of too complex type conversion. The conversion may also fail due to memory or some related issues.",
  },
  {
    id: 833,
    Question: "Which is the proper syntax of dynamic_cast?",
    Options: [
      "a) dynamic_cast(object)",
      "b) dynamic_cast new (object)",
      "c) dynamic_cast(object)",
      "d) dynamic_cast(object)",
    ],
    Answer:
      "Answer: c\nExplanation: The dynamic_cast is the name of the operator, which is followed by the new type in which the object have to be converted. Then the object name is given. This object name is then used after the type conversion.",
  },
  {
    id: 834,
    Question:
      "Which is the exception handler for the exceptions of downcasting?",
    Options: [
      "a) CastException",
      "b) ClassCastingExeption",
      "c) ClassCasting",
      "d) ClassCastException",
    ],
    Answer:
      "Answer: d\nExplanation: The exception handler for the exceptions produced during the downcasting exception. This handler can be called during runtime to handle any exception thrown.",
  },
  {
    id: 835,
    Question: "How to prevent the ClassCastExceptions?",
    Options: [
      "a) By using instanceof",
      "b) By using is-a check",
      "c) By using arrow operator with check function",
      "d) By checking type of conversion",
    ],
    Answer:
      "Answer: a\nExplanation: The instanceof operator can be used to check the compatibility of the conversion. This has to be done to check whether the casting would be safe or not.",
  },
  {
    id: 836,
    Question:
      "Which way the downcasting is possible with respect to inheritance?",
    Options: [
      "a) Upward the inheritance order",
      "b) Downward the inheritance order",
      "c) Either upward or downward the inheritance order",
      "d) Order of inheritance doesn’t matter",
    ],
    Answer:
      "Answer: b\nExplanation: The downcasting is not possible in java directly. This has to be done explicitly. The downcasting is not safe but can be checked for safe casting using instanceof function.",
  },
  {
    id: 837,
    Question:
      "What happens when downcasting is done but not explicitly defined in syntax?",
    Options: [
      "a) Compile time error",
      "b) Runtime error",
      "c) Code write time error",
      "d) Conversion error",
    ],
    Answer:
      "Answer: b\nExplanation: The downcasting is always downward the inheritance order. Since the base class object have to be casted into derived class type. This is a basic definition of downcasting.",
  },
  {
    id: 838,
    Question: "When is the downcasting used?",
    Options: [
      "a) To separate inherited class from base class",
      "b) To write a more complex code",
      "c) To compare two objects",
      "d) To disable one class in inheritance",
    ],
    Answer:
      "Answer: a\nExplanation: The implicit downcasting is not possible. If tried, the compiler produces an error. Since the compiler doesn’t allow coasting to a type that is not compatible.",
  },
  {
    id: 839,
    Question: "Why is downcasting possible in any language?",
    Options: [
      "a) Because inheritance follows has-a relationship",
      "b) Because inheritance follows is-a relationship",
      "c) Because inheritance doesn’t follow any relationship",
      "d) Because inheritance is not involved in casting",
    ],
    Answer:
      "Answer: c\nExplanation: The downcasting can be used whenever there is a need to compare one object to another. Equals() function can be used to compare whether the objects were of same age. We can use getClass() function too.",
  },
  {
    id: 840,
    Question: "What is the new operator?",
    Options: [
      "a) Allocates memory for an object or array",
      "b) Allocates memory for an object or array and returns a particular pointer",
      "c) Used as return type when an object is created",
      "d) Used to declare any new thing in a program",
    ],
    Answer:
      "Answer: b\nExplanation: The new keyword is used to allocate memory of an object or array. The new object or array can be of any type. Then it returns a suitable non zero pointer to the object.",
  },
  {
    id: 841,
    Question:
      "Microsoft C++ Components extensions support new keyword to _____________",
    Options: [
      "a) Modify a vtable",
      "b) Replace a vtable slot entry",
      "c) Add new vtable slot entries",
      "d) Rearrange vtable slot entries",
    ],
    Answer:
      "Answer: c\nExplanation: The new keyword is used for adding new vtable slot entries. This is an additional feature in Microsoft C++. It can use predefined class object for this work.",
  },
  {
    id: 842,
    Question: "What happens when new fails?",
    Options: [
      "a) Returns zero always",
      "b) Throws an exception always",
      "c) Either throws an exception or returns zero",
      "d) Terminates the program",
    ],
    Answer:
      "Answer: c\nExplanation: While creating new objects, the new operator may fail because of memory errors or due to permissions. At that moment the new operator returns zero or it may throw an exception. The exception can be handled as usual.",
  },
  {
    id: 843,
    Question:
      "If new throws an error, which function can be called to write a custom exception handler?",
    Options: [
      "a) _set_handler",
      "b) _new_handler",
      "c) _handler_setter",
      "d) _set_new_handler",
    ],
    Answer:
      "Answer: d\nExplanation: If the default exception handler has to be replaced by a user defined handler, we can call _set_new_handler run-time library function with the function name as an argument. This lets the programmer to give a custom definition for handling new operator failure.",
  },
  {
    id: 844,
    Question:
      "In C++, if new operator is used, when is the constructor called?",
    Options: [
      "a) Before the allocation of memory",
      "b) After the allocation of memory",
      "c) Constructor is called to allocate memory",
      "d) Depends on code",
    ],
    Answer:
      "Answer: b\nExplanation: The constructor function is called after the allocation of memory. In C++ the feature works in a bit different way. The memory for all the data members is allocated first and then the constructor function is called to finalize the memory allocated. ",
  },
  {
    id: 845,
    Question:
      "Which among the following is correct syntax to declare a 2D array using new operator?",
    Options: [
      "a) char (*pchar)[10] = new char[][10];",
      "b) char (pchar) = new char[][10];",
      "c) char (*char) = new char[10][];",
      "d) char (*char)[][10]= new char;",
    ],
    Answer:
      "Answer: a\nExplanation: The new operator usage to declare a 2D array requires a pointer and size of array to be declared. Data type and then the pointer with size of array. The left index can be left blank or any variable can be assigned to it.",
  },
  {
    id: 846,
    Question: "For declaring data by using new operator ____________________",
    Options: [
      "a) Type name can’t contain const",
      "b) Type name can’t contain volatile",
      "c) Type name can’t contain class declarations",
      "d) Type name can’t contain const, volatile, class declaration or enumerations",
    ],
    Answer:
      "Answer: d\nExplanation: The declaration of any data where we use new operator, any of the mentioned types are not allowed. This is because the new operator allocated memory based on the type of data which can be allocated dynamically.",
  },
  {
    id: 847,
    Question: "The new operator _____________",
    Options: [
      "a) Can allocate reference types too",
      "b) Doesn’t allocate reference types",
      "c) Can allocate reference to objects",
      "d) Doesn’t allocate any data",
    ],
    Answer:
      "Answer: b\nExplanation: The new operator doesn’t allocate reference types. This is because the reference types are not objects. The new operator is used to allocate memory to the direct objects.",
  },
  {
    id: 848,
    Question: "Which among the following is true?",
    Options: [
      "a) New operator can’t allocate functions but pointer to functions can be allocated",
      "b) New operator can allocate functions as well as pointer to functions",
      "c) New operator can allocate any type of functions",
      "d) New operator is not applicable with functions allocation",
    ],
    Answer:
      "Answer: a\nExplanation: The new operator can’t allocate functions but can allocate pointer to the functions. This is a security feature as well as to reduce the ambiguity in code. The new keyword is not given functionality to directly allocate any function.",
  },
  {
    id: 849,
    Question: "Which among the following is added in grammar of new operator?",
    Options: ["a) Finalize", "b) Arg", "c) Initializer", "d) Allocator"],
    Answer:
      "Answer: c\nExplanation: The new operator grammar is added with an initializer field. This can be used to initialize an object with a user defined constructor. Hence can allocate memory as intended by the programmer.",
  },
  {
    id: 850,
    Question: "Initializers __________________",
    Options: [
      "a) Are used for specifying arrays",
      "b) Are used to defined multidimensional arrays",
      "c) Can’t be specified for arrays",
      "d) Can’t be specified for any data",
    ],
    Answer:
      "Answer: c\nExplanation: The initializers can’t be specified for arrays. The initializers can create arrays of object if and only if the class has a default constructor. That is a zero argument constructor so that it can be called without any argument.",
  },
  {
    id: 851,
    Question: "The objects allocated using new operator ________________",
    Options: [
      "a) Are destroyed when they go out of scope",
      "b) Are not destroyed even if they go out of scope",
      "c) Are destroyed anytime",
      "d) Are not destroyed throughout the program execution",
    ],
    Answer:
      "Answer: b\nExplanation: It is not necessary that the objects get destroyed when they go out of scope if allocated by using new operator. This is because new operator returns a pointer to object that it had allocated. A suitable pointer with proper scope should be defined by the programmer explicitly.",
  },
  {
    id: 852,
    Question: "The new operator _________________",
    Options: [
      "a) Invokes function operator new",
      "b) Doesn’t invoke function operator new",
      "c) Invokes function operator only if required",
      "d) Can’t invoke function operator new implicitly",
    ],
    Answer:
      "Answer: a\nExplanation: The new operator invokes function operator new. This is done to allocate the storage to an object. ::operator new is called for storage allocation implicitly.",
  },
  {
    id: 853,
    Question:
      "If a new operator is defined for a class and still global new operator have to be used, which operator should be used with the keyword new?",
    Options: ["a) Colon", "b) Arrow", "c) Dot", "d) Scope resolution"],
    Answer:
      "Answer: d\nExplanation: As usual, scope resolution operator is used to get the scope of parent or the global entities. Hence we can use scope resolution operator with the new operator to call the global new operator even if new operator is defined for the class explicitly.",
  },
  {
    id: 854,
    Question: "How does compiler convert “::operator new” implicitly?",
    Options: [
      "a) ::operator new( sizeof( type ) )",
      "b) ::operator new( sizeof( ) )",
      "c) new operator :: type sizeof( type )",
      "d) new sizeof( type ) operator",
    ],
    Answer:
      "Answer: a\nExplanation: The compiler implicitly converts the syntax so that the instruction can be understood by the processor and proper machine code can be generated. The conversion is done implicitly and no explicit syntax is required.",
  },
  {
    id: 855,
    Question: "What is a delete operator?",
    Options: [
      "a) Deallocates a block of memory",
      "b) Deallocates whole program memory",
      "c) Deallocates only primitive data memory",
      "d) Deallocates all the data reserved for a class",
    ],
    Answer:
      "Answer: a\nExplanation: The delete operator is the reverse process of a new operator. It deallocates all the memory allocated for an object. The object can be of any type. The delete operator completely destroys an object so that the resources can be used for other purposes.",
  },
  {
    id: 856,
    Question: "If an object is allocated using new operator ____________",
    Options: [
      "a) It should be deleted using delete operator",
      "b) It can’t be deleted using delete operator",
      "c) It may or may not be deleted using delete operator",
      "d) The delete operator is not applicable",
    ],
    Answer:
      "Answer: a\nExplanation: The new operator allocates an object in memory and hence the memory allocation is bit different from usual allocation of an object. The delete operator can be used to delete the memory allocated for an object.",
  },
  {
    id: 857,
    Question: "Does delete return any value?",
    Options: [
      "a) Yes, positive value",
      "b) Yes, negative value",
      "c) Yes, zero value",
      "d) No",
    ],
    Answer:
      "Answer: d\nExplanation: The delete operator doesn’t return any value. Its function is to delete the memory allocated for an object. This is done in reverse way as that new operator works.",
  },
  {
    id: 858,
    Question: "Which type of value has resulted from the delete operator?",
    Options: ["a) void", "b) void pointer", "c) null pointer", "d) null"],
    Answer:
      "Answer: a\nExplanation: The result of the delete operator is void. The values returned is of no use to the program or any other system function hence the return type is not defined for the delete operator.",
  },
  {
    id: 859,
    Question:
      "If delete is used to delete an object which was not allocated using new _______________",
    Options: [
      "a) Then out of memory error arises",
      "b) Then unreachable code error arises",
      "c) Then unpredictable errors may arise",
      "d) Then undefined variable error arises",
    ],
    Answer:
      "Answer: c\nExplanation: When the delete operator is used with the objects that were not allocated using new operator then unpredictable errors may arise. This is because the delete can’t perform the required actions on the type of memory allocated for the object.",
  },
  {
    id: 860,
    Question: "Delete operator _________________",
    Options: [
      "a) Can be used on pointers with null value",
      "b) Can be used on pointers with void value",
      "c) Can be used on pointer with value 0",
      "d) Can be used on pointer with any value",
    ],
    Answer:
      "Answer: c\nExplanation: The delete operator can be used on pointers with the value 0. This actually means that when new operator fails and return value 0 then deleting the result of failed new remains harmless. Hence the deletion is possible.",
  },
  {
    id: 861,
    Question:
      "When delete operator is used ___________________ (If object has a destructor)",
    Options: [
      "a) Object destructor is called after deallocation",
      "b) Object destructor is called before deallocation",
      "c) Object destructor is not used",
      "d) Object destructor can be called anytime during destruction",
    ],
    Answer:
      "Answer: b\nExplanation: The destructor is called before the memory is deallocated for any object. The destructor call initiates the destruction process and the deallocation of memory takes place.",
  },
  {
    id: 862,
    Question:
      "If delete is applied to an object whose l-value is modifiable, then _______________ after the object is deleted.",
    Options: [
      "a) Its value is defined as null",
      "b) Its value is defined as void",
      "c) Its value is defined as 0",
      "d) Its value is undefined",
    ],
    Answer:
      "Answer: d\nExplanation: After performing delete operation on an object whole l-value is modifiable, its values becomes undefined. This is done so as to denote that the memory space is available to be used for other purposes.",
  },
  {
    id: 863,
    Question: "How many variants of delete operator are available?",
    Options: ["a) Only 1", "b) Only 2", "c) Only 3", "d) Only 4"],
    Answer:
      "Answer: b\nExplanation: There are two variants of delete operator. One is for object deletion. Other is for deletion of object array.",
  },
  {
    id: 864,
    Question: "Which is the correct syntax to delete a single object?",
    Options: [
      "a) delete *objectName;",
      "b) objectName delete;",
      "c) delete objectName;",
      "d) objectName *delete;",
    ],
    Answer:
      "Answer: c\nExplanation: The object to be deleted is mentioned after the keyword delete. This deletes the object from memory and free up the memory that was acquired by the object.",
  },
  {
    id: 865,
    Question: "Which is the correct syntax to delete an array of objects?",
    Options: [
      "a) delete [] objectName;",
      "b) delete * objectName;",
      "c) objectName[] delete;",
      "d) delete objectName[];",
    ],
    Answer:
      "Answer: a\nExplanation: The object array that has to be deleted is mentioned after the keyword delete. But after delete, empty square brackets have to be given to denote that the deletion have to be done on array of objects.",
  },
  {
    id: 866,
    Question: "Which cases among the following produces the undefined result?",
    Options: [
      "a) delete [] on an independent object",
      "b) delete on an object array",
      "c) delete [] on an object and delete on object array",
      "d) Undefined result is never produced",
    ],
    Answer:
      "Answer: c\nExplanation: The undefined result is always produced when we try to use delete [] with a single object. Because the type of deletion mismatches. Same in case where we try to apply delete to an object array.",
  },
  {
    id: 867,
    Question: "The delete operator __________________",
    Options: [
      "a) Invokes function operator delete",
      "b) Invokes function defined by user to delete",
      "c) Invokes function defined in global scope to delete object",
      "d) Doesn’t invoke any function",
    ],
    Answer:
      "Answer: a\nExplanation: The delete operator invokes the function operator delete. This function in turn performs all the delete operations on the mentioned object. This is ensures safe deletion.",
  },
  {
    id: 868,
    Question: "For objects that are not of class type ______________",
    Options: [
      "a) Global delete operator is invoked",
      "b) Local delete operator is invoked",
      "c) Global user defined function is invoked",
      "d) Local function to delete object is called",
    ],
    Answer:
      "Answer: a\nExplanation: The global delete operator is called to delete the objects that are not of class type. Class type includes class, union or struct. All objects of these types can be deleted using the global delete operator.",
  },
  {
    id: 869,
    Question: "The delete operator __________________________",
    Options: [
      "a) Can be defined for each class",
      "b) Can’t be defined for each class",
      "c) Can be defined globally only",
      "d) Can’t be defined in a program explicitly",
    ],
    Answer:
      "Answer: a\nExplanation: The delete operator can be defined for each class explicitly. If there is a class for which delete is not defined then the global delete operator is used. The definition of delete operator for each class is not necessary.",
  },
  {
    id: 870,
    Question: "What are automatic variables?",
    Options: [
      "a) Global variables",
      "b) Implicit/temporary variables",
      "c) Local variables",
      "d) System variables",
    ],
    Answer:
      "Answer: c\nExplanation: The local variables are also known as automatic variables. The variables in any local scope that are created and destroyed as the program executes its scope.",
  },
  {
    id: 871,
    Question: "The memory for automatic variables ___________________",
    Options: [
      "a) Have to be allocated and deallocated explicitly",
      "b) Are allocated and deallocated automatically",
      "c) Is never actually allocated",
      "d) Are never safe",
    ],
    Answer:
      "Answer: b\nExplanation: The memory is allocated and deallocated automatically for the automatic variables. As soon as the variable comes in scope, the memory is allocated. The variables are destroyed as soon as those go out of scope.",
  },
  {
    id: 872,
    Question: "Scope of an automatic variable _______________",
    Options: [
      "a) Is actually the whole program",
      "b) Is actually never fixed",
      "c) Is always equal to the whole program execution",
      "d) Is actually function or block in which it is defined",
    ],
    Answer:
      "Answer: d\nExplanation: The automatic variables scope is limited only within the block or the function where those are defined. This is the property of all the automatic variables.",
  },
  {
    id: 873,
    Question:
      "Which among the following is true for automatic variables in general?",
    Options: [
      "a) Automatic variables are invisible to called function",
      "b) Automatic variables are always visible to the called function",
      "c) Automatic variables can’t interact with the called function",
      "d) Automatic variables can’t be variable",
    ],
    Answer:
      "Answer: a\nExplanation: The automatic variables are hidden from the called function. Even if passed by reference or address, the address of the variable is used and not the actual variable of calling function. Automatic variables can be const or variable.",
  },
  {
    id: 874,
    Question:
      "If an automatic variable is created and then a function is called then ________________",
    Options: [
      "a) The automatic variable created gets destroyed",
      "b) The automatic variable doesn’t get destroyed",
      "c) The automatic variable may or may not get destroyed",
      "d) The automatic variable can’t be used in this case",
    ],
    Answer:
      "Answer: b\nExplanation: The automatic variables are saved till the called function gets executed. This is done so as to ensure that the program can continue its execution after the called function is returned. The automatic variables gets destroyed only if those go out of scope.",
  },
  {
    id: 875,
    Question:
      "Where are the automatic variables stored if another function is called in between the execution of the program?",
    Options: ["a) Heap", "b) Queue", "c) Stack", "d) Temp variable"],
    Answer:
      "Answer: c\nExplanation: All the automatic variables are stored in a new stack entry as soon as their scope is created. If another function is called, the present data is saved in stack and new entry in stack is made for the called function. When the function returns, the automatic variables are used again from where those were left.",
  },
  {
    id: 876,
    Question: "The static variables of a function ________________",
    Options: [
      "a) Are also automatic variables",
      "b) Are not automatic variables",
      "c) Are made automatic by default",
      "d) Can be made automatic explicitly",
    ],
    Answer:
      "Answer: b\nExplanation: The static members can’t be automatic. This is because the automatic variables are created and destroyed with each call to a specific function. But the static members remain throughout the execution of program once created.",
  },
  {
    id: 877,
    Question: "All variables declared within a block ____________________",
    Options: [
      "a) Are not always automatic",
      "b) Can be made non-automatic",
      "c) Are static by default",
      "d) Are automatic by default",
    ],
    Answer:
      "Answer: d\nExplanation: The variables declared inside a block, are make automatic by default. This is to ensure that the variables get destroyed when not required. The variables remain live only till those are required, the life is dependent on the scope of a variable.",
  },
  {
    id: 878,
    Question: "What values does uninitialized automatic variables contain?",
    Options: [
      "a) Null value",
      "b) Void value",
      "c) Undefined/Garbage",
      "d) Zero value",
    ],
    Answer:
      "Answer: c\nExplanation: The automatic variable which are not initialized, contain garbage value. If we just declare a variable and try to print its value, the result is some unknown value. The value is garbage as that was not expected value.",
  },
  {
    id: 879,
    Question:
      "Constructor of automatic variables is called ____________________",
    Options: [
      "a) When execution reaches the place of declaration of automatic variables",
      "b) When the program is compiled",
      "c) When the execution is just started",
      "d) Just before the execution of the program",
    ],
    Answer:
      "Answer: a\nExplanation: Only when the execution reaches the place where the automatic variable was declared, the constructor is called. This is to ensure that the memory is not allocated if not needed. The memory is allocated and then destroyed as soon as it goes out of scope.",
  },
  {
    id: 880,
    Question: "Does java contain auto or register keywords?",
    Options: [
      "a) Yes, for declaring every type of variable",
      "b) Yes, only to declare cache registers",
      "c) No, because java doesn’t support automatic variables",
      "d) No, java supports local variable concept",
    ],
    Answer:
      "Answer: d\nExplanation: The auto and register keywords are not supported in java. Though the same is allowed in java without specifying any of those keywords. The variables are local variables. But java makes it mandatory to initialize all of the local variables in a program.",
  },
  {
    id: 881,
    Question: "The automatic variables _________________________",
    Options: [
      "a) Must be declared after its use",
      "b) Must be declared before using",
      "c) Must be declared, can be anytime",
      "d) Must not be initialized",
    ],
    Answer:
      "Answer: b\nExplanation: All the automatic variables in a program must be declared before their use. The compiler won’t allow any use of variable if those are not declared before their use.",
  },
  {
    id: 882,
    Question:
      "Which error is produced if the automatic variables are used without declaration?",
    Options: [
      "a) Undefined symbol",
      "b) Memory error",
      "c) Type mismatch",
      "d) Statement missing",
    ],
    Answer:
      "Answer: a\nExplanation: If the automatic variables are used without declaration or are used before the declaration then the compiler throws an error. The error that the symbol is undefined. The compiler must know everything before that can be used.",
  },
  {
    id: 883,
    Question: "In Perl, using which operator are the local variables created?",
    Options: ["a) Dot", "b) Arrow", "c) Scope resolution", "d) my"],
    Answer:
      "Answer: d\nExplanation: The language perl supports local variables but the concept is bit different. And if the values are not assigned to the local variables then it contains undef value.",
  },
  {
    id: 884,
    Question:
      "How are automatic variables different from the instance variables?",
    Options: [
      "a) Automatic variables are initialized automatically but instances are not",
      "b) Automatic variables are given zero values initially and not instances",
      "c) Instance variables have to be initialized explicitly and automatic implicitly",
      "d) Instance variables are initialized implicitly while automatic are not",
    ],
    Answer:
      "Answer: d\nExplanation: The automatic variables have to be initialized explicitly. But in case of instances, those are initialized automatically during execution of the program. The conventions are mandatory.",
  },
  {
    id: 885,
    Question: "What is extern variable?",
    Options: [
      "a) Variables to be used that are declared in another object file",
      "b) Variables to be used that are declared in another source file",
      "c) Variables to be used that are declared in another executable file",
      "d) Variables to be used that are declared in another program",
    ],
    Answer:
      "Answer: b\nExplanation: The variables that are declared in another source file can be accessed in other files using extern variables. The extern variables must be mentioned explicitly. The source file is included to use its variables.",
  },
  {
    id: 886,
    Question: "Which among the following is a correct statement for variables?",
    Options: [
      "a) Variable can be declared many times",
      "b) Variable can be declared only one time",
      "c) Variable declaration can’t be done more than ones",
      "d) Variable declaration is always done more than one time",
    ],
    Answer:
      "Answer: a\nExplanation: The variables can be declared any number of times. There is no restriction on how many times a single variables can be declared. Declaration is just an indication that the variable will be used in the program.",
  },
  {
    id: 887,
    Question: "Which among the following is true for the variables?",
    Options: [
      "a) Variable can be defined only once",
      "b) Variable can be defined any number of times",
      "c) Variable must be defined more than one time",
      "d) Variable can be defined in different files",
    ],
    Answer:
      "Answer: a\nExplanation: The variables can be defined only once. Once the variable is defined, then it can’t be declared again. The definition of a variable is actual allocation of memory for the variable.",
  },
  {
    id: 888,
    Question: "To use extern variable _____________________",
    Options: [
      "a) The source file must not be included in the new file code",
      "b) The source file itself must be used for a new program",
      "c) The source file must be included in the new file",
      "d) The source file doesn’t matter for extern variables",
    ],
    Answer:
      "Answer: c\nExplanation: The source file must be included in the file which needs to use the extern variable. This is done to ensure that the variables that are already declared can be used again. Only the declarations are used from one file to another.",
  },
  {
    id: 889,
    Question: "What does a header file contain for an extern variable?",
    Options: [
      "a) Only declaration of variables",
      "b) Only definition of variables",
      "c) Both declaration and definition of variables",
      "d) Neither declaration nor definition",
    ],
    Answer:
      "Answer: a\nExplanation: The header file only contains the declaration of variables that are extern. It doesn’t contain any static variable definitions.",
  },
  {
    id: 890,
    Question:
      "Which condition is true if the extern variable is used in a file?",
    Options: [
      "a) All the header files declare it",
      "b) Only few required files declare it",
      "c) All header files declared it if required",
      "d) Only one header file should declare it",
    ],
    Answer:
      "Answer: d\nExplanation: Only one header file should declare the extern variable to be used. There must not be more than one file declaring the same extern variable. This is to ensure that there is no ambiguity in using the extern variable.",
  },
  {
    id: 891,
    Question:
      "Whenever a function is declared in a program _____________________",
    Options: [
      "a) extern can be used only in some special cases",
      "b) extern can’t be used",
      "c) function is extern by default",
      "d) it can’t be made extern",
    ],
    Answer:
      "Answer: c\nExplanation: Even if we don’t specify a function to be extern, by default all the functions are exter. The compiler adds the keyword at the beginning of the function declaration. If there is an extern function to be used then it will be used otherwise the new function only will be used.",
  },
  {
    id: 892,
    Question:
      "Which of the following results in the allocation of memory for the extern variables?",
    Options: [
      "a) Declaration",
      "b) Definition",
      "c) Including file",
      "d) Memory is not allocated for extern variables",
    ],
    Answer:
      "Answerr: b\nExplanation: The statement is false. The variables are not extern by default. If those are made extern by default, then the memory will never be allocated for those extern variables. Hence we make the variables extern explicitly.",
  },
  {
    id: 893,
    Question: "Which is the correct syntax for extern variable declaration?",
    Options: [
      "a) extern data_type variable_name;",
      "b) extern variable_name;",
      "c) data_type variable_name extern;",
      "d) extern (data_type)variable_name;",
    ],
    Answer:
      "Answer: b\nExplanation: The memory for the extern variables are allocated due to their definition. When the variables are declared, it only indicates the compiler that the variable is going to be used somewhere. But definition makes the compiler to allocate the memory for the variables.",
  },
  {
    id: 894,
    Question: "Which is the correct syntax for extern function declaration?",
    Options: [
      "a) extern function_name(argument_list);",
      "b) extern return_type function_name(argument_list);",
      "c) extern (return_type)function_name(argument_list);",
      "d) return_type extern function_name(argument_list);",
    ],
    Answer:
      "Answer: a\nExplanation: The syntax firstly contains the keyword extern. Then the data type of the variable is given. Then the variabel name is mentioned by which it will be used in the program.",
  },
  {
    id: 895,
    Question:
      '12. What will be the output of the program?<div class="hk1_style-wrap4"><div class="hk1_style-wrap3"><div class="hk1_style-wrap2"><div class="hk1_style-wrap"><div class="hk1_style"><div class="cpp"><pre class="de1"><span class="kw4">extern</span> <span class="kw4">int</span> var<span class="sy4">;</span>\n<span class="kw4">int</span> main<span class="br0">(</span><span class="kw4">void</span><span class="br0">)</span>\n<span class="br0">{</span>\n  var <span class="sy1">=</span> <span class="nu0">10</span><span class="sy4">;</span>\n  var<span class="sy2">++</span><span class="sy4">;</span>\n  <span class="kw3">cout</span><span class="sy1">&lt;&lt;</span>var<span class="sy4">;</span>\n<span class="br0">}</span></pre></div></div></div></div></div></div>',
    Options: ["a) 10", "b) 11", "c) Run time error", "d) Compile time error"],
    Answer:
      "Answer: b\nExplanation: The syntax must contain the keyword extern first, to denote that the function is extern. Though the function are extern by default but among the given choices, it should contain the keyword, for explicit declaration. Then the usual function declaration follows.",
  },
  {
    id: 896,
    Question:
      "If the definition is given in the header file that we include then ________________",
    Options: [
      "a) The program can run successfully",
      "b) Also the program should define the extern variable",
      "c) The extern variable must contain two definitions",
      "d) Extern variable can’t be used in the program",
    ],
    Answer:
      "Answer: d\nExplanation: The program gives the compiler time error. There is no definition given for the extern variables. This is not allowed and hence we get a compile time error.",
  },
  {
    id: 897,
    Question:
      "If extern variable is initialized with the declaration then _______________________",
    Options: [
      "a) Also the header file with definition is required",
      "b) The header file with definition must be included",
      "c) There is no need to include any other header file for definition",
      "d) The extern variable produces compile time error",
    ],
    Answer:
      "Answer: a\nExplanation: The program runs successfully. This is because only one definition of any variable is allowed. And hence the definition from the source file that is included will be used.",
  },
  {
    id: 898,
    Question: "Why are functions extern by default?",
    Options: [
      "a) Because functions are always private",
      "b) Because those are not visible throughout the program",
      "c) Because those can’t be accessed in all parts of the program",
      "d) Because those are visible throughout the program",
    ],
    Answer:
      "Answer: c\nExplanation: When the value for the extern variable is defined with its declaration, then there is no need to include any file for the definition of the variable. The Initialization acts as a definition for the extern variable in the file itself.",
  },
  {
    id: 899,
    Question: "What are inbuilt classes?",
    Options: [
      "a) The predefined classes in a language",
      "b) The classes that are defined by the user",
      "c) The classes which are meant to be modified by the user",
      "d) The classes which can’t be used by the user",
    ],
    Answer:
      "Answer: a\nExplanation: The classes that are already provided in a programming language for use are inbuilt classes. These classes provide some functions or objects that can be used by the programmer for easier code.",
  },
  {
    id: 900,
    Question: "Inbuilt class __________________________",
    Options: [
      "a) Must be included before use",
      "b) Are not necessary to be included for use",
      "c) Are used by the compiler only",
      "d) Can be modified by programmer always",
    ],
    Answer:
      "Answer: a\nExplanation: The inbuilt classes must be included in the program. Whenever some functions are used, they must have a declaration before use. The same is the case with classes.",
  },
  {
    id: 901,
    Question: "What doesn’t inbuilt classes contain?",
    Options: [
      "a) Function prototype",
      "b) Function declaration",
      "c) Function definitions",
      "d) Objects",
    ],
    Answer:
      "Answer: c\nExplanation: The classes contain the definitions of the special functions that are provided for the programmers use. Those functions can be used to make the programming easy and to reuse the already existing code.",
  },
  {
    id: 902,
    Question: "Which among the following not an inbuilt class in C++?",
    Options: ["a) System", "b) Color", "c) String", "d) Functions"],
    Answer:
      "Answer: d\nExplanation: There is no inbuilt class named function in java. The others are classes already provided in java. All those classes contain some special functions to be used in programming.",
  },
  {
    id: 903,
    Question: "What is the InputStream class meant for?",
    Options: [
      "a) To handle all input streams",
      "b) To handle all output streams",
      "c) To handle all input and output streams",
      "d) To handle only input from file",
    ],
    Answer:
      "Answer: a\nExplanation: The InputStream is an inbuilt class which is used to handle all the tasks related to input handling. This class extends input from keyboard or file or any other possible input stream.",
  },
  {
    id: 904,
    Question: "Which statement is true for the Array class?",
    Options: [
      "a) Arrays can have variable length",
      "b) The length array can be changed",
      "c) Each class has an associated Array class",
      "d) Arrays can contain different type of values",
    ],
    Answer:
      "Answer: c\nExplanation: The Array class is associated with all the other classes. This gives us the flexibility to declare an array of any type. The index goes from 0 to n, where n is some fixed size for array.",
  },
  {
    id: 905,
    Question: "What is the use of Math class?",
    Options: [
      "a) To use the mathematical functions with strings",
      "b) To use the mathematical functions",
      "c) To suppress the use of mathematical functions",
      "d) To complex the calculations",
    ],
    Answer:
      "Answer: b\nExplanation: The Math class is provided with some special functions. These functions can be used to calculate and get result of some special and usual mathematical functions. We don’t have to write the code to calculate the trigonometric function results, instead we can use Math functions.",
  },
  {
    id: 906,
    Question: "DataInputStream is derived from ______________________",
    Options: [
      "a) StreamingInput",
      "b) StreamedInput",
      "c) StreameInput",
      "d) StreamInput",
    ],
    Answer:
      "Answer: d\nExplanation: The DataInputStream is more specific class for operating on specific type of data inputs. This is used to read data of specific type. The same can be used to read data in a specific format.",
  },
  {
    id: 907,
    Question: "Which attribute can be used to get the size of an array?",
    Options: [
      "a) Size.Array",
      "b) Array.Size",
      "c) Array_name.length",
      "d) length.Array_name",
    ],
    Answer:
      "Answer: c\nExplanation: The array name is given of which the length have to be calculated. The array length is stored in the attribute length. Hence we access it using dot operator.",
  },
  {
    id: 908,
    Question: "Number class can’t manipulate ____________________",
    Options: [
      "a) Integer values",
      "b) Float values",
      "c) Byte values",
      "d) Character values",
    ],
    Answer:
      "Answer: d\nExplanation: The Number class is used to work with all the number type of values. The integers, float, double, byte etc. are all number type values. Character is not a number value.",
  },
  {
    id: 909,
    Question:
      "Which function should be used to exit from the program that is provided by System class?",
    Options: ["a) exit(int);", "b) gc();", "c) terminate();", "d) halt();"],
    Answer:
      "Answer: a\nExplanation: The exit function should be used to terminate the program. The function is passed with an argument. The argument indicated the type of error occurred.",
  },
  {
    id: 910,
    Question: "Which class contain runFinalization() method?",
    Options: ["a) Finalize", "b) System", "c) Final", "d) SystemFinal"],
    Answer:
      "Answer: b\nExplanation: The runFinalization() Function is defined in the System class. The function is used to finalize an object which undergo destruction. The action is required to terminate the object properly.",
  },
  {
    id: 911,
    Question: "What does load(String)::= function do, in System class?",
    Options: [
      "a) Loads dynamic library for a path name",
      "b) Loads all the dynamic libraries",
      "c) Loads all the Number in string format",
      "d) Loads the processor with calculations",
    ],
    Answer:
      "Answer: a\nExplanation: Only the specified path named dynamic libraries are loaded. All the dynamic libraries can’t be loaded at a time. Hence we use this function for specific libraries.",
  },
  {
    id: 912,
    Question: "Which is not a System class variable?",
    Options: ["a) err", "b) out", "c) in", "d) put"],
    Answer:
      "Answer: d\nExplanation: Put is not a System class variable. The most general and basic variables are err, out and in. The variables can handle most of the tasks performed in a program.",
  },
  {
    id: 913,
    Question: "Which package contains the utility classes?",
    Options: ["a) java.lang", "b) java.utility", "c) java.util", "d) java.io"],
    Answer:
      "Answer: c\nExplanation: The package java.util contains all the utility classes. This package also contains generic data structures, date, time etc. These can be used in any java program, you just have to include java.util package.",
  },
  {
    id: 914,
    Question: "What is the use of IO class?",
    Options: [
      "a) To handle all the input operations",
      "b) To handle all the output operations",
      "c) To handle all the input and output operations",
      "d) To handle all the input and output to the standard input",
    ],
    Answer:
      "Answer: c\nExplanation: The IO class provides functions that can be used to handle input and output operations. All the inputs from standard input and standard output, and also from the files can be handled. This gives the flexibility to make the programs more user friendly.",
  },
  {
    id: 915,
    Question:
      "IO class provides input and output through ______________________",
    Options: [
      "a) Data streams",
      "b) Serialization",
      "c) File system",
      "d) Data streams, serialization and file system",
    ],
    Answer:
      "Answer: d\nExplanation: The IO classes are made such that those can support the input and output from any type of source or destination. The input can be taken from system file and standard input and also some special devices if conned. Same is case to show the output.",
  },
  {
    id: 916,
    Question:
      "Which among the following class contains the methods to access character based console device?",
    Options: ["a) Console", "b) File", "c) Device", "d) Pipe"],
    Answer:
      "Answer: a\nExplanation: The Console class contains the methods to access the character based devices. The devices which can stream the data as character set. All those devices can be made use of by using the methods of class Console.",
  },
  {
    id: 917,
    Question: "File class is ____________________________",
    Options: [
      "a) An abstract of file representation only",
      "b) An abstract of path names only",
      "c) An abstract which can be used to represent path names or file",
      "d) An abstract which can represent a file in any format",
    ],
    Answer:
      "Answer: c\nExplanation: The File class is made to operate with the files. The file can be of any type. All the input and output operations that have to be performed on a file can be done using File class object.",
  },
  {
    id: 918,
    Question: "What is a FileDescriptor?",
    Options: [
      "a) A handle for machine specific structure of an open file",
      "b) A handle for program specific structure of an open file",
      "c) A handle for compiler specific structure of an open file",
      "d) A handle for representing device files structure",
    ],
    Answer:
      "Answer: a\nExplanation: The machine specific structure of an open file have to be handled in some special ways. FileDescriptor class can handle those files. The FileDescriptor can also handle open socket, another source, sink of bytes.",
  },
  {
    id: 919,
    Question: "FileInputStream _________________________",
    Options: [
      "a) Gets the input stream from any device file",
      "b) Gets the input stream from any open socket",
      "c) Gets the input stream from any cache",
      "d) Gets the input stream from any open file only",
    ],
    Answer:
      "Answer: d\nExplanation: The most specific answer is that the FileInputStream can only be used for the opened files. The class can work only for the file type. No socket or another source are allowed to be accessed.",
  },
  {
    id: 920,
    Question: "What does FilePermission class do?",
    Options: [
      "a) This class is used to give permission rights to a file",
      "b) This class is used to restrict the use of permissions",
      "c) This class is used to represent device access permissions",
      "d) This class is used to represent file access permissions",
    ],
    Answer:
      "Answer: d\nExplanation: The FilePermission can’t get access to the device access permissions. The Permission is given to a file when it is created or otherwise when a privileged user changes it. Then these permission rights can be accessed using the FilePermission class.",
  },
  {
    id: 921,
    Question: "Which class among the following makes incorrect assumptions?",
    Options: [
      "a) LineNumberInputStream",
      "b) LineNumberReader",
      "c) LineReader",
      "d) LineBuffer",
    ],
    Answer:
      "Answer: a\nExplanation: The LineNumberInputStream class makes false assumptions. The false assumption is that it assumes, all the byte data is a character. Which is actually not the case, instead the character have one byte memory space.",
  },
  {
    id: 922,
    Question: "Reader class is _________________",
    Options: [
      "a) Used to read from files",
      "b) Abstract class to read character streams",
      "c) Abstract class to input character streams",
      "d) Used to take input from standard input stream",
    ],
    Answer:
      "Answer: b\nExplanation: The Reader class is an abstract class that can be used to read characters stream. It can’t be used for any kind of input. It can just read the existing data.",
  },
  {
    id: 923,
    Question: "Which class can handle IO class interrupt?",
    Options: [
      "a) ExceptionIO",
      "b) InteruptedIO",
      "c) InteruptedIOException",
      "d) IOInteruptException",
    ],
    Answer:
      "Answer: c\nExplanation: The only class which handles the IO class interrupts is InteruptedIOException class. This class is specially provided to handle any case that involves the execution interrupt.",
  },
  {
    id: 924,
    Question: "StringReader handles _____________________",
    Options: [
      "a) Any character stream",
      "b) A character stream whose source is an array",
      "c) A character stream whose source is character array",
      "d) A character stream whose source is String only",
    ],
    Answer:
      "Answer: d\nExplanation: The StringReader can only work with the string type data. Even if a character array is given, it might produce some errors in code. Hence only the string values can be handled properly.",
  },
  {
    id: 925,
    Question:
      "Which exception handler can be used when character encoding is not supported?",
    Options: [
      "a) UnsupportedException",
      "b) UnsupportedEncodingException",
      "c) SupportException",
      "d) EncodingException",
    ],
    Answer:
      "Answer: b\nExplanation: The encoding that is unsupported in a system can be handled. The exception handler is UnSupportedEncodingException class. An object of this class can be created which will catch the exception and handle it.",
  },
  {
    id: 926,
    Question: "RandomAccessFile can be used to _______________________",
    Options: [
      "a) Read from a random access file",
      "b) Write to a random access file",
      "c) Read and write to a random access file",
      "d) Restricts read and write to a random access file",
    ],
    Answer:
      "Answer: a\nExplanation: The PushBackReader allows the character streams handling. The main feature is that the stream can be pushed back to the stream. This is used in special cases of handling input stream.",
  },
  {
    id: 927,
    Question:
      "Which among the following is a serialization descriptor for any class?",
    Options: [
      "a) StreamClass",
      "b) ObjectStreamClass",
      "c) ObjectStream",
      "d) StreamObjectClass",
    ],
    Answer:
      "Answer: c\nExplanation: The RandomAccessFile class instance can be created to handle input and output operations to a random access file. It first checks the permissions on the file and then any required operation can be done on a random access file. Comparatively faster than other files access.",
  },
  {
    id: 928,
    Question: "Which is a true statement for object of String class?",
    Options: [
      "a) Object are immutable",
      "b) Object are mutable",
      "c) Object are created only once",
      "d) Object can’t be created",
    ],
    Answer:
      "Answer: a\nExplanation: The object of string class are mostly immutable. This means that the String objects are constant. These can’t be changed once created.",
  },
  {
    id: 929,
    Question: " How to declare an object of class String?",
    Options: [
      "a) String object_Name = value;",
      "b) String object_name = new;",
      "c) String object_name= new value;",
      "d) String object_name= value new;",
    ],
    Answer:
      "Answer: a\nExplanation: The class name String is given. And then the object name is mentioned. There are two ways to declare and initialize the string. Either by giving direct string value or by using new keyword. But if new operator is used, constructor of String class have to be called. From the given options, the direct string value declaration is correct.",
  },
  {
    id: 930,
    Question: "What does function length do in String class?",
    Options: [
      "a) Returns length of string including null character",
      "b) Returns length of string excluding null character",
      "c) Returns length of substring",
      "d) Returns size of string in bytes",
    ],
    Answer:
      "Answer: b\nExplanation: The length function returns the length of string. The length is the number of characters in the string but the last null character is not counted. The string length can be used to loop through each character in the string.",
  },
  {
    id: 931,
    Question:
      "Which is the function to get the character present at a particular index in the string?",
    Options: [
      "a) char charAt(index);",
      "b) char charIn(StringName);",
      "c) char charAt(StringName);",
      "d) char charIn(index);",
    ],
    Answer:
      "Answer: a\nExplanation: The function can be called using dot operator with the string object. Char is the return type of the function to return the character at specified position. The index must be an integer value, less than the length of string.",
  },
  {
    id: 932,
    Question:
      "If only one parameter is passed to substring function then __________________",
    Options: [
      "a) It returns the character at the specified position",
      "b) It returns the string of length 1 from the specified index",
      "c) It returns the string from specified index till the end",
      "d) It returns the string from starting of string till the specified index",
    ],
    Answer:
      "Answer: c\nExplanation: The substring function returns a string value. The string is the substring starting from the specified index till the end. The substring function have to be called with the object of string class.",
  },
  {
    id: 933,
    Question:
      "If two index are given as argument to substring function then ___________________",
    Options: [
      "a) String of length equal to sum of two arguments is returned",
      "b) String starting from first index and of length equal to send argument",
      "c) String starting from first index and of length equal to sum of two arguments",
      "d) String starting from first index and ending at second index position",
    ],
    Answer:
      "Answer: d\nExplanation: A value of string type is returned from this function. The returned string is a substring that starts from the first argument position, till the second index position. The indices must be less than the length of actual string.",
  },
  {
    id: 934,
    Question:
      "String class have a concat() function that is used to _____________________",
    Options: [
      "a) Replace old string by new string",
      "b) Add two strings",
      "c) Append one string at end of another string",
      "d) Remove a string from end of one string",
    ],
    Answer:
      "Answer: c\nExplanation: The concat function is used to append string into another string. The new string is always appended at the end of source string. The target string is appended as it is and the whole string is then ended by null character.",
  },
  {
    id: 935,
    Question: "The function lastIndexOf() is used to ___________________",
    Options: [
      "a) Get the index of last occurrence of specified character in argument",
      "b) Get the index of first occurrence of specified character in argument",
      "c) Get the index of last occurrence of first character in string",
      "d) Get the index of last occurrence of last character of string",
    ],
    Answer:
      "Answer: a\nExplanation: The function is used to get the last occurrence index of a character present in a string. The return type is char. Single character is returned. The function is used with a string object and the target character is passed as its argument.",
  },
  {
    id: 936,
    Question:
      "Function equals() is _______________ and equalIgnoreCase() is _________________",
    Options: [
      "a) Case Insensitive, case insensitive",
      "b) Case sensitive, Case insensitive",
      "c) Case sensitive, case sensitive",
      "d) Case insensitive, case sensitive",
    ],
    Answer:
      "Answer: b\nExplanation: Both the functions return Boolean value. The function equal() is case sensitive and returns false even if a single character is case different in two strings. The other function ignores the case sensitivity and only checks if the spellings are same.",
  },
  {
    id: 937,
    Question: "The compareTo() function is used to ________________",
    Options: [
      "a) Compare strings value to string object",
      "b) Compare string value to string value",
      "c) Compare string object to another string object",
      "d) Compare string object to another string value",
    ],
    Answer:
      "Answer: c\nExplanation: The source and target must be objects of the string class. The compare is always case sensitive. To compare two string objects without case sensitivity then we can use compareToIgnoreCase() function.",
  },
  {
    id: 938,
    Question:
      "String class provides function toUpper() to _____________________",
    Options: [
      "a) Convert first character to uppercase",
      "b) Convert last character to uppercase",
      "c) Convert the whole string characters to uppercase",
      "d) Convert uppercase to lower and lower to uppercases",
    ],
    Answer:
      "Answer: c\nExplanation: The function is used to convert each character of the string. If the character is already uppercase then it remains the same. But if some character is in lowercase then it will be converted to uppercase.",
  },
  {
    id: 939,
    Question: "String trim() function is used to _______________________",
    Options: [
      "a) Remove all the white spaces from the string",
      "b) Remove white space from start of string",
      "c) Remove white space at end of string",
      "d) Remove white space from both the ends of string",
    ],
    Answer:
      "Answer: d\nExplanation: The function is used to remove any white space from both the ends of a given string. The white space include space, tab, next line etc. It will be removed both from the starting of string and from the end of string.",
  },
  {
    id: 940,
    Question: "Function replace() accepts _____________ arguments.",
    Options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    Answer:
      "Answer: b\nExplanation: The first argument is the target character. This target character will be replaced by another character. The new character is the second argument to the function. Only the characters can be passed as argument, not a string.",
  },
  {
    id: 941,
    Question:
      "If two arguments are passed to the indexOf() function then ___________________",
    Options: [
      "a) Second argument indicates the occurrence number of specified character from starting",
      "b) Second argument indicates the occurrence number of specified character from end",
      "c) Second argument indicates the index of the character in first argument",
      "d) Second argument indicates the index of the character from the last of the string",
    ],
    Answer:
      "Answer: a\nExplanation: The string may have more than one occurrence of a character. We use this function to get the index at which the specified number of times a specific character has occurred in a string. For example, we can get the index of 5th occurrence of character “j” in a string.",
  },
];
module.exports.getQuestion = () => {
  let index = Math.floor(Math.random() * questions.length);
  return questions[index];
};
