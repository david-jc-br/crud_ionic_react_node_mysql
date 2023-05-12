-- Table People

CREATE TABLE
    people (
        id int NOT NULL AUTO_INCREMENT,
        first_name varchar(50),
        last_name varchar(50),
        email varchar(100),
        age int,
        gender enum('Male', 'Female'),
        address text,
        PRIMARY KEY (id)
    );

-- Exemple Insert

INSERT INTO
    people (
        first_name,
        last_name,
        email,
        age,
        gender,
        address
    )
VALUES (
        'João',
        'Silva',
        'joao.silva@gmail.com',
        30,
        'Male',
        'Rua das Flores, 123'
    ), (
        'Maria',
        'Santos',
        'maria.santos@hotmail.com',
        25,
        'Female',
        'Av. Brasil, 456'
    ), (
        'Pedro',
        'Oliveira',
        'pedro.oliveira@yahoo.com',
        35,
        'Male',
        'Rua do Sol, 789'
    ), (
        'Ana',
        'Costa',
        'ana.costa@gmail.com',
        28,
        'Female',
        'Av. Paulista, 1000'
    ), (
        'Lucas',
        'Rocha',
        'lucas.rocha@hotmail.com',
        32,
        'Male',
        'Rua da Praia, 555'
    ), (
        'Aline',
        'Ferreira',
        'aline.ferreira@gmail.com',
        27,
        'Female',
        'Rua do Mar, 222'
    ), (
        'Gustavo',
        'Pereira',
        'gustavo.pereira@yahoo.com',
        31,
        'Male',
        'Av. Beira Rio, 333'
    ), (
        'Carla',
        'Alves',
        'carla.alves@hotmail.com',
        29,
        'Female',
        'Rua da Montanha, 444'
    ), (
        'Rafael',
        'Nunes',
        'rafael.nunes@gmail.com',
        33,
        'Male',
        'Av. das Árvores, 777'
    ), (
        'Camila',
        'Barros',
        'camila.barros@yahoo.com',
        26,
        'Female',
        'Rua da Cidade, 888'
    ), (
        'Henrique',
        'Melo',
        'henrique.melo@hotmail.com',
        34,
        'Male',
        'Av. do Lago, 999'
    ), (
        'Isabela',
        'Gomes',
        'isabela.gomes@gmail.com',
        23,
        'Female',
        'Rua das Pedras, 111'
    ), (
        'Leonardo',
        'Ribeiro',
        'leonardo.ribeiro@yahoo.com',
        37,
        'Male',
        'Av. das Flores, 222'
    ), (
        'Juliana',
        'Pinto',
        'juliana.pinto@hotmail.com',
        24,
        'Female',
        'Rua da Praça, 333'
    ), (
        'Fernando',
        'Sousa',
        'fernando.sousa@gmail.com',
        36,
        'Male',
        'Av. dos Ventos, 444'
    );