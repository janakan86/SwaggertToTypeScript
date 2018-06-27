import json
import os

from classStructure import NodeStructure
import properties


def construct_file_dict(keys_of_dict, json_file, node_Structure):
    for key in keys_of_dict:
        value = json_file[key]

        if type(value) is dict:
            new_dict_node = NodeStructure("curly", key)
            construct_file_dict(value.keys(), value, new_dict_node)
            NodeStructure.add_curly_bracket(node_Structure, new_dict_node)
        elif type(value) is list:
            new_dict_node = NodeStructure("square", key)
            construct_file_list(value, new_dict_node)
            NodeStructure.add_square_bracket(node_Structure, new_dict_node)
        else:
            NodeStructure.add_values(node_Structure, key, value)


def construct_file_list(element_list, node_structure):
    for element in element_list:
        if type(element) is list:
            new_list_node = NodeStructure("square", element)
            construct_file_list(element, new_list_node)
            NodeStructure.add_square_bracket(node_structure, new_list_node)
        elif type(element) is dict:
            new_dict_node = NodeStructure("curly", "")
            construct_file_dict(element.keys(), element,new_dict_node)
            NodeStructure.add_curly_bracket(node_structure, new_dict_node)
        else:
            print(element, "error should come here")


def convert_file(input_file_name, output_file_name):
    try:

        script_dir = os.path.dirname(__file__)
        rel_input_path = properties.input_file_directory + "/" + input_file_name
        abs_input_file_path = os.path.join(script_dir, rel_input_path)

        file = open(abs_input_file_path, "r")
        jsonFile = json.load(file)

        keys = jsonFile.keys()  # returns dict_keys
        rootNode = NodeStructure("curly", "top")
        construct_file_dict(keys, jsonFile, rootNode)

        rel_output_path = properties.output_file_directory + "/" + output_file_name
        abs_output_file_path = os.path.join(script_dir, rel_output_path)

        file = open(abs_output_file_path, "w")
        NodeStructure.format_class(rootNode, file, 1, output_file_name.split('.')[0])
        file.close()


    except ValueError as e:
        print(e)
