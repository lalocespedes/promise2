<?php

use Phinx\Migration\AbstractMigration;

class ComprobantesGroups extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $comprobantes_groups = $this->table('comprobantes_groups');
        $comprobantes_groups->addColumn('name', 'string')
            ->addColumn('next_id', 'integer')
            ->addColumn('prefix', 'string', array('limit' =>  50, 'null' => true))
            ->addColumn('template', 'string', array('default' => 'default'))
            ->addColumn('created_at', 'timestamp')
            ->addColumn('updated_at', 'timestamp', array('null'    => true,'default' => null))
            ->addIndex('id')
            ->create();

        $this->execute("
        INSERT INTO comprobantes_groups (id, name, next_id, prefix, template) VALUES
        (1,'valeHerram',1,NULL,default)
        ");
    }
}
