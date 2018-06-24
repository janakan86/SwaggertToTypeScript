import properties

class NodeStructure:

    def __init__(self, node_type, name):
        self.name = name
        self.node_type = node_type
        self.curly_brackets = list()
        self.square_brackets = list()
        self.values = dict()

    def add_curly_bracket(self, value):
        self.curly_brackets.append(value)

    def add_square_bracket(self, value):
        self.square_brackets.append(value)

    def add_values(self, name, value):
        self.values[name] = value

    #test function to check
    def print_myself(self):
        for element in self.curly_brackets:
            if type(element) is NodeStructure:
                print("node Type", element.nodeType, " name: ", element.name)
                NodeStructure.print_myself(element)

        for element in self.square_brackets:
            if type(element) is NodeStructure:
                print("node Type", element.nodeType, " name: ", element.name)
                NodeStructure.print_myself(element)

        for element in self.values.keys():
                print("values ", element, " : ",  self.values[element])


    #Formats the elements in the Typescript class / interface and writes the file
    def format_class(self, file, space, name):
        file.write("export " +properties.type_of_output+" "+ name)
        file.write("{\n")

        for element in self.curly_brackets:
            if type(element) is NodeStructure:
                file.write("   " * space + element.name + " :" if element.name != "" else "")
                file.write("   " * space + "{\n")
                NodeStructure.format_node(element, file, space + 1)
                file.write("   " * space + "};\n \n")

        file.write("}")

    def format_node(self, file, space):
        for element in self.curly_brackets:
            if type(element) is NodeStructure:
                file.write("   " * space + '"' + element.name + '"' + " : \n" if element.name != "" else "")
                space += 1

                file.write("   " * space + "{\n")
                NodeStructure.format_node(element, file, space + 1)
                file.write("   " * space + "}\n")

        for (idx,element) in enumerate(self.square_brackets):
            if type(element) is NodeStructure:
                file.write("   " * space + '"' + element.name + '"' + " : \n" if element.name != "" else "")
                file.write("   " * space + "[\n")
                NodeStructure.format_node(element, file, space + 1)
                file.write("   " * space + "]")

                if idx < len(self.square_brackets) - 1:
                    file.write(",")

                file.write("\n")

        for (idx, element) in enumerate(list(self.values.keys())):
            file.write("   " * space + '"' + str(element) + '": "' + str(lookup_datatype(self.values[element])) + '"')
            if idx < len(list(self.values.keys()))-1:
                file.write(",")
            file.write("\n")


def lookup_datatype(type):
    if type == 0:
        return "number"
    else:
        return "string"
