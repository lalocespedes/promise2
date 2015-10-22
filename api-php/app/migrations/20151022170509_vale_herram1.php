<?php

use Phinx\Migration\AbstractMigration;

class ValeHerram1 extends AbstractMigration
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
        $vale = $this->table('vale_herram_items');
        $vale->addColumn('active', 'boolean', array('default' => 1 , 'after' => 'cantidad'))
            ->addColumn('entregado', 'timestamp', array('after' => 'active', 'null' => true,'default' => null))
            ->save();


    }
}
